import Project from "@/components/projects/project/Project";

interface AboutMeSectionInterface {
    title?: string;
    content: string;
}

interface AboutMeInterface {
    sections: AboutMeSectionInterface[];
}

const AboutMeSections: AboutMeSectionInterface[] = [
    {
        title: "Who am I",
        content: "I am a 20 year old from Ireland with many interests from sport to reading and technology.\n"
    },
    {
        title: "How I Got Into Software, Tech and Content Creation\n",
        content: "During 2020 while schools were closed in Ireland, I began trying my hand at some new things. One of those things was making small ecommerce websites on Shopify. I began getting into ecommerce and all of the creative processes that are required to have a successful ecommerce brand. I needed to drive traffic to my website, and also needed my website to look as good as possible so that people would hopefully buy my product. I became frustrated however with the inflexible design capabilities of Shopify, so I began to look into how I could make my websites and advertising content better. I read books about copywriting for sales so that I could convert more customers from what they read on my website and Facebook Ads. I also began getting into how I could make the visuals of the brand better. This meant making a better website and better video advertisement content. This led me to the topics of web development, photorealistic 3d product rendering and video and photo editing.\n",
    },
    {
        content: "Learning these skills was a demonstration of my focus on the development of a brand and a product's image.\n"
    },
    {
        content: "In the summer of 2022 I began a YouTube channel called 'Sport Cartel', so that I could get more hands-on experience of content creation and building a brand. Making a YouTube channel was the perfect exercise in learning all of these skills, as it taught me not only the Adobe Suite, but through the invaluable mistakes I made has helped me learn a lot about converting viewer, viewer retention and what it takes to scale a brand on the front-end. My most valuable lesson from making this channel was the value of a team in taking on a big project.\n"
    }
]

export default function AboutMe() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>About Me</h1>
                {AboutMeSections.map((s) => (
                    <AboutMeSection
                        key={s.content}
                        title={s.title}
                        content={s.content}
                    ></AboutMeSection>
                ))
                }
            </section>
        </>
    )
}


function AboutMeSection({title, content}: AboutMeSectionInterface) {
    return (
        <div className={"medium-separator"}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}