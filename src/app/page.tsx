import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Testimonial from "@/components/experience/testimonial/Testimonial";

export default function Home() {
    return (
        <>
            <section className={"section-padding large-bottom-separator"}>
                <Hero></Hero>
            </section>
            <section id={"experience"} className={"section-padding large-bottom-separator invert-colors large-padding-y"}>
                <Experience
                    experienceItems={[
                        {
                            jobTitle: "Founder and Software Developer",
                            company: "eefenn Digital Services",
                            startDate: "September 2024",
                            endDate: "Current",
                            description: "While in college I started eefenn as a way to market my skillset, which I was already using for freelance work. \n" +
                                "\n" +
                                "Worked directly with customers to deliver full stack applications from design, frontend development, backend development and provisioning infrastructure on AWS. I worked to create a healthy development lifecycle that included CI/CD pipelines to automate test and deployment operations.\n" +
                                "\n" +
                                "I learned a lot about project management and managing priority of tasks etc. I mainly used Jira to create tickets and outline requirements.",
                        },
                        {
                            jobTitle: "Software Technician",
                            company: "Midland Steel Reinforcement Supplies",
                            startDate: "June 2024",
                            endDate: "August 2024",
                            description: "During the summer of 2024 I spent my time writing software of various forms in Midland Steel Reinforcement Supplies. \n" +
                                "\n" +
                                "I was core in design and implementation to many key technical projects during my time there, writing software to integrate existing and future software systems and created systems to provide business intelligence for decision making in MSRS. Some of the systems I was involved in were fully implemented by myself, and the core ideas of some others were given to dedicated software third parties within the industry as POCs/references. Some of the projects I was involved in included:",
                        },
                    ]}
                ></Experience>
                <Testimonial></Testimonial>
            </section>
        </>
    )
}
