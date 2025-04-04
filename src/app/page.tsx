import Hero from "@/components/hero/Hero";
import Project, {ProjectInterface} from "@/components/projects/project/Project";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";

export default function Home() {
    return (
        <>
            <section className={"section-padding"}>
                <Hero></Hero>
            </section>
            <section className={"section-padding"}>

                <Experience></Experience>
            </section>
            <section id={"projects"} className={"black-page section-padding"}>
                <Projects></Projects>
            </section>
        </>
    )
}
