interface YouTubeEmbedProps {
    videoId: string;
}

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;
