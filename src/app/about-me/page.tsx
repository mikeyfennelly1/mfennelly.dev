import Project from "@/components/projects/project/Project";
import {ReactNode} from "react";
import Link from "next/link";

interface AboutMeSectionInterface {
    title?: string;
    content: ReactNode;
}

interface AboutMeInterface {
    sections: AboutMeSectionInterface[];
}

const AboutMeSections: AboutMeSectionInterface[] = [
    {
        title: "Who am I",
        content: <p>I'm a 21 year old from Ireland. I have many interests, ranging from sport to <Link href="/bookshelf" className={"bold accent1 underline"}>reading</Link> and technology.</p>
    },
    {
        title: "How I Got Into Software, Tech and Content Creation\n",
        content: <>
            <p className="medium-bottom-separator">
                During 2020 when schools were closed in Ireland due to COVID (I was 15 years old), I began trying my hand at some new things.
                One of those things was making small ecommerce websites on <Link href="http://www.shopify.com/" target="_blank" className={"bold accent1 underline"}>Shopify</Link>. I had big plans
                of making lots of money and, of course, thought it was going to be so easy 😀
            </p>
            <p className="medium-bottom-separator">
                My first website was a dropshipping website selling <strong>Dog Beds</strong>. From there I went on to selling <strong>Neck Massagers</strong>. Yes, funny 😀
            </p>
            <p className="medium-bottom-separator">
                To my amazement, sales were very slow. After thinking this was going to be easy, I quickly realised that there was a lot more to ecommerce
                than just setting up a website and waiting for the money to roll in.
            </p>
            <p className="medium-bottom-separator">
                From there I started to get more into the creative processes around ecommerce and what's involved in creating a successful ecommerce brand.
                I realised that I needed to create a much nicer website but was becoming increasingly frustrated with the inflexibility of Shopify. This led me
                to spend time learning web development frameworks like <Link href={"https://react.dev/"} target="_blank" className={"bold accent1 underline"}>React</Link>, as well as CI/CD processes using
                &nbsp;<Link href="https://github.com/features/actions" target="_blank" className={"bold accent1 underline"}>GitHub Actions</Link>.
            </p>
            <p className="medium-bottom-separator">
                While I was finding these technologies very very interesting (and fun), I also started to <Link href="/bookshelf" className={"bold accent1 underline"}>read books</Link> about copywriting for sales so that I could convert more customers
                from what they read on my website and Facebook Ads. I also began getting into how I could make the visuals of the brand better.
                This led me to wider topics around photorealistic product rendering via tools such as <Link href={"https://www.adobe.com/"} target="_blank" className={"bold accent1 underline"}>Adobe Creative Suite</Link>
                &nbsp;and <Link href="https://www.blender.org/" target="_blank" className={"bold accent1 underline"}>Blender</Link>.
            </p>
            <p>
                In the summer of 2022 I began a YouTube channel called "Sport Cartel". Making a YouTube channel was a great way for me to hone my story telling skills, as well another
                avenue for me to exercise my creativity and technical skills using <Link href={"https://www.adobe.com/"} target="_blank" className={"bold accent1 underline"}>Adobe Creative Suite</Link> etc.
                Check out some of my videos on the <Link href="/content-creation" className={"bold accent1 underline"}>Content Creation Projects Page</Link>.
            </p>
        </>,
    }
]

export default function AboutMe() {
    return (
        <>
            <section>
                {AboutMeSections.map((s, index) => (
                    <AboutMeSection
                        key={`c-${index}`}
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
            <h2 className="medium-bottom-separator">{title}</h2>
            <>{content}</>
        </div>
    )
}