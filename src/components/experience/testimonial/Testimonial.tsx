import "./testimonal.css"

interface TestimonialProps {
    quote: string;
    author: string;
    title: string;
}

export default function Testimonial({ quote, author, title }: TestimonialProps) {
    return (
        <>
            <div className="medium-separator container testimonial-container">
                <div id={"border-element"} className={"animated-gradient"}></div>
                <div className={"testimonial "}>

                    <p className={"side-note"} style={{fontWeight: 200}}>
                        {quote}
                    </p>
                    <p className={"medium-separator side-note"}> - <span className={"bold"}>{author}</span> - {title}</p>
                </div>

            </div>
        </>
    )
}
