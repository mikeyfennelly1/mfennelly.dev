import Link from "next/link";
import Image from "next/image";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

/**
 * Element overrides for MDX-authored blog posts. Typographic styling comes from
 * the `prose` wrapper in the post page; these overrides wire MDX up to the
 * framework primitives (next/link, next/image) and the site's accent colour.
 */
export const mdxComponents: MDXRemoteProps["components"] = {
    a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isInternal = href.startsWith("/");
        if (isInternal) {
            return (
                <Link href={href} className="text-salmon underline-offset-4 hover:underline">
                    {children}
                </Link>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-salmon underline-offset-4 hover:underline"
                {...props}
            >
                {children}
            </a>
        );
    },
    img: ({ src, alt = "" }: ImgHTMLAttributes<HTMLImageElement>) => {
        if (typeof src !== "string") return null;
        return (
            <span className="not-prose block relative aspect-[16/9] my-10 overflow-hidden border border-black/5 dark:border-white/5">
                <Image src={src} alt={alt} fill className="object-cover" />
            </span>
        );
    },
};
