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
                            jobTitle: "Software Engineer Intern",
                            company: "Manna Air Delivery",
                            startDate: "June 2025",
                            endDate: "December 2025",
                            description: "During my time at Manna I worked on the airspace team, which is responsible for the autonomous orchestration systems for fleets of delivery drones across the world. I was lucky enough to be trusted to work on many projects with significant business consequences. Some of the projects I worked on included:",
                            companyLink: "https://www.manna.aero/",
                            children: (
                                <div className={"manna-projects"}>
                                    {mannaProjectBriefs.map((brief) => (
                                        <MidlandSteelProject
                                            key={Math.random()}
                                            projectBrief={brief}
                                            bulletPointSize={5}
                                            circleColour={"#ffffff"}
                                        ></MidlandSteelProject>
                                    ))}
                                </div>
                            )
                        },
                        {
                            jobTitle: "Software Technician",
                            company: "Midland Steel Reinforcement Supplies",
                            startDate: "June 2024",
                            endDate: "August 2024",
                            description: "Heavily involved in the design and implementation of many key projects. Wrote software to help integrate a number of existing software systems. Also created a system to provide business intelligence on MSRS. Some of the systems I worked on were implemented fully by me in house, while some others were developed by me as Proof of Concepts and then handed off to external companies for further development. Some of the projects I was involved in included:",
                            companyLink: "https://midlandsteelreinforcement.com/",
                            children: (
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
                            )
                        },
                    ]}
                ></Experience>

                <Testimonial
                    quote={"I had the pleasure of supervising Mikey during his internship at Midland Steel, where he consistently demonstrated strong technical skills and a proactive work ethic. Mikey contributed to key projects, including the design and production data comparison report, the development of an IFC Parsing Algorithm, and the architecture design for our Installation Reports Database. He also handled various IT tasks with efficiency and reliability. Mikey’s adaptability, quick learning, and collaborative spirit made him a valuable team member. I highly recommend Mikey for any future role—he will be an asset to any team."}
                    author={"Anupam Tamrakar"}
                    title={"Manager, Research and Development at Midland Steel"}
                ></Testimonial>
            </section>
        </>
    )
}

const mannaProjectBriefs: string[] = [
    "A development environment for the development of Manna's cloud services. This included features for hot-reloading of applications in many environments (Docker, on the host machine and in Kubernetes) with a single unified dash for monitoring all services. I used my containerization knowledge to reduce build times by upwards of 95%.",
    "A tool for migrating time series databases from the cloud to on-prem and cloud targets. This tool was built to transfer high volumes of data from databases with tables of upward of 100 million rows.",
    "A highly concurrent tool for simulating flights in airspaces across the world. From a YAML configuration, this tool extrapolated flight plans, and mocked hundreds of concurrent telemetry producers in airspaces across the world.",
    "An airspace monitoring system, which analysed airspaces globally for airspace breaches, and routed alerts to necessary first responders through various APIs.",
    "The main project that I worked on was a large integration of the Manna platform to work in non-EU jurisdictions. This was mission critical for Manna's expansion into the United States, Switzerland and the UAE, and opened the door to a market size of 280 million potential urban customers. The integration was with an open source distributed service discovery system called InterUSS, which is largely developed and maintained by Wing (Google's drone delivery arm), NASA, Amazon and Lockheed Martin. My role on this project was as lead architect and developer, and worked with senior colleagues to deliver a solution to this tricky project.",
]
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