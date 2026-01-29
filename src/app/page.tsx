import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Testimonial from "@/components/experience/testimonial/Testimonial";

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <section id={"experience"} className={"section-padding large-bottom-separator invert-colors large-padding-y"}>
                <Experience
                    experienceItems={[
                        {
                            jobTitle: "Founder and Engineer",
                            company: "eefenn",
                            startDate: "September 2024",
                            endDate: "Present",
                            description: "While in college, I started eefenn as a way to market the skillset that I'd been developing while doing some freelance work. Worked directly with customers to deliver full stack applications from design, frontend development, backend development and to provisioning infrastructure on AWS. I worked to create a healthy development lifecycle that included CI/CD pipelines to automate test and deployment operations. I learned a lot about project management and managing priority of tasks etc.",
                            companyLink: "#"
                        },
                        {
                            jobTitle: "Software Technician",
                            company: "Midland Steel Reinforcement Supplies",
                            startDate: "June 2024",
                            endDate: "August 2024",
                            description: "Heavily involved in the design and implementation of many key projects. Wrote software to help integrate a number of existing software systems. Also created a system to provide business intelligence on MSRS. Some of the systems I worked on were implemented fully by me in house, while some others were developed by me as Proof of Concepts and then handed off to external companies for further development. Some of the projects I was involved in included:",
                            companyLink: "https://midlandsteelreinforcement.com/"
                        },
                    ]}
                ></Experience>
                <div className={"midland-steel-projects"}>
                    {midlandSteelProjectBriefs.map((brief) => (
                        <MidlandSteelProject
                            key={Math.random()}
                            projectBrief={brief}
                            bulletPointSize={5}
                            circleColour={"#ffffff"}
                        ></MidlandSteelProject>
                    ))}
                </div>

                <Testimonial></Testimonial>
            </section>
        </>
    )
}

const midlandSteelProjectBriefs: string[] = [
    "A weldpoint calculation system to calculate weldpoints in prefabricated rebar structures, directly from plaintext design files in IFC format - streamlining the collaboration of the design and robotics departments.",
    "A key exploratory data analysis project, relating to production data.",
    "The design and implementation of the 'Central MSRS Database' - to provide a variety of KPIs for the business and interface with new systems used at MSRS for reporting on installation activities and many other key metrics.",
    "An IFC parsing algorithm, used to translate IFC files into other file formats used at MSRS."
]

interface MidlandSteelProjectProps {
    projectBrief: string;
    bulletPointSize: number;
    circleColour: string;
}

function MidlandSteelProject({projectBrief, bulletPointSize, circleColour}: MidlandSteelProjectProps) {
    return (
        <>
            <div className={"midland-steel-project-outer-container"}>
                <div className={"project-circle-container"}>
                    <svg
                        className={"midland-steel-project-circle"}
                        xmlns="http://www.w3.org/2000/svg" width={bulletPointSize * 2} height={bulletPointSize * 2}>
                        <circle cx={bulletPointSize} cy={bulletPointSize} r={bulletPointSize} fill={circleColour}/>
                    </svg>
                </div>
                <div className={"project-brief-container"}>
                    <p>
                        {projectBrief}
                    </p>
                </div>
            </div>
        </>
    )
}