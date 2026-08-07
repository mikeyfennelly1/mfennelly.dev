export function BlogHeader() {
    return <>
        <div
            className="absolute inset-0 opacity-40 grayscale contrast-[1.1] pointer-events-none"
            style={{
                backgroundImage: 'url("/da-vinci-notebook--3.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-zinc-900/80 pointer-events-none"/>

        <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-zalando font-extrabold tracking-[calc(-0.05em)] uppercase leading-[0.8] mb-8">
                Blog
            </h1>
            <p className="text-muted-foreground font-light tracking-tight max-w-xl">
                Insights on architecture, engineering, and the philosophy of building.
            </p>
        </div>
    </>;
}

