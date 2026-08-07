import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { getAllBlogPosts, getBlogSlugs } from "./getBlogPosts";

/**
 * getBlogPosts.ts resolves its content directory from process.cwd(), which
 * Vitest sets to the project root. These tests therefore write real .mdx files
 * into the real content/blog directory and read them back through the real fs
 * and gray-matter — nothing is mocked or stubbed, so stepping into any call
 * below walks the actual code.
 *
 * Real posts live in that directory too, so the suite parks the whole
 * directory under a temporary name for its duration and puts it back
 * afterwards. That keeps assertions exact — content/blog holds nothing but
 * fixtures while tests run — and never deletes a real post.
 *
 * Tests within a file run sequentially, so sharing one directory is safe.
 */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const CONTENT_DIR = path.dirname(BLOG_DIR);

/** Where the real content/blog is parked for the duration of the suite. */
const STASHED_BLOG_DIR = `${BLOG_DIR}.__stashed-by-tests`;

/** Whether content/ existed before, so we can leave the tree exactly as we found it. */
let contentDirPreexisted = false;

beforeAll(() => {
    // Self-heal: a run killed mid-suite (easy to do while sitting at a
    // breakpoint) leaves the real directory parked. Put it back first.
    restoreStashedBlogDir();

    contentDirPreexisted = fs.existsSync(CONTENT_DIR);
    if (fs.existsSync(BLOG_DIR)) fs.renameSync(BLOG_DIR, STASHED_BLOG_DIR);
});

afterEach(() => {
    // Only fixtures live here while the suite runs; the real posts are parked.
    fs.rmSync(BLOG_DIR, { recursive: true, force: true });
});

afterAll(() => {
    fs.rmSync(BLOG_DIR, { recursive: true, force: true });
    restoreStashedBlogDir();
    if (!contentDirPreexisted) fs.rmSync(CONTENT_DIR, { recursive: true, force: true });
});

/** Write each entry into content/blog, creating the directory if needed. */
function writePosts(files: Record<string, string>): void {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
    for (const [name, contents] of Object.entries(files)) {
        fs.writeFileSync(path.join(BLOG_DIR, name), contents);
    }
}

function restoreStashedBlogDir(): void {
    if (!fs.existsSync(STASHED_BLOG_DIR)) return;
    fs.rmSync(BLOG_DIR, { recursive: true, force: true });
    fs.renameSync(STASHED_BLOG_DIR, BLOG_DIR);
}

/** Serialise frontmatter + body into an .mdx source string. */
function mdx(frontmatter: Record<string, unknown>, body = "Some body copy."): string {
    const yaml = Object.entries(frontmatter)
        .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
        .join("\n");
    return `---\n${yaml}\n---\n\n${body}\n`;
}

describe("getBlogSlugs", () => {
    it("returns an empty list when there are no .mdx files", () => {
        writePosts({});

        expect(getBlogSlugs()).toEqual([]);
    });

    it("returns one slug per .mdx file, with the extension stripped", () => {
        writePosts({
            "hello-world.mdx": mdx({ title: "Hello" }),
            "second-post.mdx": mdx({ title: "Second" }),
        });

        expect(getBlogSlugs().sort()).toEqual(["hello-world", "second-post"]);
    });

    it("ignores files that are not .mdx", () => {
        writePosts({
            "real-post.mdx": mdx({ title: "Real" }),
            "old-post.md": mdx({ title: "Markdown, not MDX" }),
            "notes.txt": "just some notes",
            "README": "no extension at all",
        });

        expect(getBlogSlugs()).toEqual(["real-post"]);
    });

    it("strips only the trailing .mdx extension", () => {
        writePosts({
            "post.mdx.mdx": mdx({ title: "Doubled extension" }),
        });

        expect(getBlogSlugs()).toEqual(["post.mdx"]);
    });
});

describe("getAllBlogPosts", () => {
    // Smallest possible repro — the best place to put a breakpoint first.
    it("returns one post for one .mdx file", () => {
        writePosts({
            "only-post.mdx": mdx({
                title: "The Only Post",
                authors: ["Mikey Fennelly"],
                date: "2026-01-15",
                image: "/blog/only-post.png",
            }),
        });

        const posts = getAllBlogPosts();

        expect(posts).toHaveLength(1);
        expect(posts[0]).toEqual({
            slug: "only-post",
            title: "The Only Post",
            authors: ["Mikey Fennelly"],
            date: "2026-01-15",
            image: "/blog/only-post.png",
            excerpt: undefined,
        });
    });

    it("sorts posts newest first", () => {
        writePosts({
            "middle.mdx": mdx({ title: "Middle", date: "2026-03-01" }),
            "oldest.mdx": mdx({ title: "Oldest", date: "2025-11-20" }),
            "newest.mdx": mdx({ title: "Newest", date: "2026-06-30" }),
        });

        expect(getAllBlogPosts().map((post) => post.slug)).toEqual([
            "newest",
            "middle",
            "oldest",
        ]);
    });

    it("omits the MDX body from the returned posts", () => {
        writePosts({
            "with-body.mdx": mdx({ title: "Has a body" }, "# Heading\n\nParagraph text."),
        });

        expect(getAllBlogPosts()[0]).not.toHaveProperty("content");
    });

    describe("frontmatter normalisation", () => {
        it("keeps an authors array as a list of strings", () => {
            writePosts({
                "many-authors.mdx": mdx({ title: "Co-written", authors: ["Ada", "Grace"] }),
            });

            expect(getAllBlogPosts()[0].authors).toEqual(["Ada", "Grace"]);
        });

        it("wraps a single author string in a list", () => {
            writePosts({
                "one-author.mdx": mdx({ title: "Solo", authors: "Mikey Fennelly" }),
            });

            expect(getAllBlogPosts()[0].authors).toEqual(["Mikey Fennelly"]);
        });

        it("falls back to an empty author list when authors is missing", () => {
            writePosts({
                "no-author.mdx": mdx({ title: "Anonymous" }),
            });

            expect(getAllBlogPosts()[0].authors).toEqual([]);
        });

        it("falls back to 'Untitled' when title is missing", () => {
            writePosts({
                "no-title.mdx": mdx({ date: "2026-01-01" }),
            });

            expect(getAllBlogPosts()[0].title).toBe("Untitled");
        });

        it("falls back to empty strings for a missing date and image", () => {
            writePosts({
                "bare.mdx": mdx({ title: "Bare" }),
            });

            const post = getAllBlogPosts()[0];
            expect(post.date).toBe("");
            expect(post.image).toBe("");
        });

        it("keeps excerpt undefined when it is absent", () => {
            writePosts({
                "no-excerpt.mdx": mdx({ title: "No excerpt" }),
            });

            expect(getAllBlogPosts()[0].excerpt).toBeUndefined();
        });

        it("passes an excerpt through when present", () => {
            writePosts({
                "with-excerpt.mdx": mdx({ title: "Has excerpt", excerpt: "A short summary." }),
            });

            expect(getAllBlogPosts()[0].excerpt).toBe("A short summary.");
        });
    });
});

describe("when the content directory does not exist", () => {
    // Nothing to set up: the real posts are parked for the whole suite and
    // afterEach removes the fixture directory, so simply writing no posts
    // leaves content/blog absent.
    it("getBlogSlugs returns an empty list", () => {
        expect(getBlogSlugs()).toEqual([]);
    });

    it("getAllBlogPosts returns an empty list", () => {
        expect(getAllBlogPosts()).toEqual([]);
    });
});
