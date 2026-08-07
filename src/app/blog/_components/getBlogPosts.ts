import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogPost, BlogPostMeta, BlogPostWithContent } from "./BlogPost";

const BLOG_DIR: string = path.join(process.cwd(), "content", "blog");

function normalizeMeta(data: Record<string, unknown>): BlogPostMeta {
    return {
        title: String(data.title ?? "Untitled"),
        authors: Array.isArray(data.authors)
            ? data.authors.map(String)
            : data.authors
              ? [String(data.authors)]
              : [],
        date: String(data.date ?? ""),
        image: String(data.image ?? ""),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
    };
}

/** Slugs for every `.mdx` file in the content directory. */
function getBlogSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}

/** Read a single post (frontmatter + raw MDX body) by slug, or null if missing. */
function blogPostFromSlug(slug: string): BlogPostWithContent | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return { slug, ...normalizeMeta(data), content };
}

function postFromPostWithContent(post: BlogPostWithContent): BlogPost {
    return {
        slug: post.slug,
        title: post.title,
        authors: post.authors,
        date: post.date,
        image: post.image,
        excerpt: post.excerpt,
    };
}

function getBlogPostsFromSlugs(blogPostSlugs: string[]): BlogPost[] {
    let allBlogPosts: BlogPost[] = []

    // if we can retrieve a valid BlogPost from the
    // slug, add it to allBlogPosts
    for (const slug of blogPostSlugs) {
        const post: BlogPostWithContent | null = blogPostFromSlug(slug);
        if (post == null ) continue
        const blogPost: BlogPost = postFromPostWithContent(post)
        allBlogPosts.push(blogPost)
    }
    return allBlogPosts
}

function sortBlogPostsChronologically(blogPosts: BlogPost[]): BlogPost[] {
    return blogPosts.sort((a: BlogPost, b: BlogPost): number =>
        new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getAllBlogPosts(): BlogPost[] {
    const blogPostSlugs:  string[] = getBlogSlugs()
    let allBlogPosts: BlogPost[] = getBlogPostsFromSlugs(blogPostSlugs)
    allBlogPosts = sortBlogPostsChronologically(allBlogPosts)
    return allBlogPosts
}

export {getAllBlogPosts, getBlogSlugs}
