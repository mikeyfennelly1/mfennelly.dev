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
                            description: <>
                                While in college, I started <span className={"bold"}>eefenn</span> as a way to market the skillset that I'd been developing while doing some freelance work.
                                Worked directly with customers to deliver full stack applications from design, frontend development, backend development and to provisioning infrastructure on AWS.
                                I worked to create a healthy development lifecycle that included CI/CD pipelines to automate test and deployment operations.
                                I learned a lot about project management and managing priority of tasks etc.
                            </>,
                        },
                        {
                            jobTitle: "Software Technician",
                            company: "Midland Steel Reinforcement Supplies",
                            startDate: "June 2024",
                            endDate: "August 2024",
                            description: <>
                                Heavily involved in the design and implementation of many key projects. Wrote software to help integrate a number of existing software systems.
                                Also created a system to provide business intelligence on MSRS. Some of the systems I worked on were implemented
                                fully by me in house, while some others were developed by me as Proof of Concepts and then handed off to external companies for further development.
                            </>
                        },
                    ]}
                ></Experience>
                <Testimonial></Testimonial>
            </section>
        </>
    )
}
