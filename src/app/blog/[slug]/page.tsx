import {getPostBySlug, getAllPosts, Post} from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const posts: Post[] = getAllPosts();
    return posts.map((post: Post): {slug: string} => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params: {slug: string} = await props.params;
    const post: Post = getPostBySlug(params.slug);

    return (
        <article className="container mx-auto mt-15 min-h-screen px-6 pt-[45px] min-[800px]:px-12">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm">
                <header className="mb-10 pb-10 border-b border-gray-200">
                    <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
                    <div className="text-gray-500 flex gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                </header>
                <div className="prose prose-lg max-w-none prose-headings:font-medium prose-h1:text-3xl prose-h2:text-2xl prose-a:text-blue-600 hover:prose-a:underline">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
