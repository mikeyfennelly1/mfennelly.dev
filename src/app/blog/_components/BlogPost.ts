export type BlogPostMeta = {
    title: string;
    authors: string[];
    date: string;
    image: string;
    excerpt?: string;
};

export type BlogPost = BlogPostMeta & {
    slug: string;
};

export type BlogPostWithContent = BlogPost & {
    content: string;
};
