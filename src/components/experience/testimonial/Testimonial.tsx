interface TestimonialProps {
    quote: string;
    author: string;
    title: string;
}

export default function Testimonial({ quote, author, title }: TestimonialProps) {
    return (
        <>
            <div className="flex py-[15px] [&_p]:pl-[50px] min-[800px]:px-[100px]">
                <div className="min-h-full min-w-[4px] bg-[linear-gradient(to_bottom,#F2B79F_0%,#d9a893_35%,#8a8f93_70%,#596475_100%)]"></div>
                <div>

                    <p style={{fontWeight: 200}}>
                        {quote}
                    </p>
                    <p className={"py-[15px]"}> - <span className={"font-medium"}>{author}</span> - {title}</p>
                </div>

            </div>
        </>
    )
}
