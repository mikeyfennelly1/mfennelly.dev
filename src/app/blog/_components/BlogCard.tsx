import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
    title: string;
    authors: string[];
    date: string;
    image: string;
    slug: string;
    className?: string;
}

export function BlogCard({ title, authors, date, image, slug, className }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className={cn("group block", className)}>
            <div className="flex flex-col gap-6">
                <div className="relative aspect-[16/9] overflow-hidden border border-black/5 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900">
                    <Image 
                        src={image} 
                        alt={title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-light text-muted-foreground">
                        <time dateTime={date}>{date}</time>
                        <span className="w-1 h-1 rounded-full bg-salmon/50" />
                        <span>{authors.join(" & ")}</span>
                    </div>
                    
                    <h3 className="text-2xl font-light tracking-tighter uppercase group-hover:text-salmon transition-colors duration-300 leading-none">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
