import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <section className="section-padding large-padding-y container mx-auto min-h-screen">
            <h1 className="mb-12">Blog</h1>
            <div className="grid gap-8">
                {posts.map((post) => (
                    <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`} 
                        className="block p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow no-underline"
                    >
                        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                        <p className="text-lg text-gray-700">{post.description}</p>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p>No posts found.</p>
                )}
            </div>
        </section>
    );
}
