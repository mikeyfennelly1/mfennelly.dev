import './projects.css';
import Project, { ProjectInterface } from "@/components/projects/project/Project";

const SoftwareProjects: ProjectInterface[] = [
    {
        projectName: "mrun",
        projectBrief: "mpod is a containerization project that I am working on currently to learn about containers and Linux operating systems. This project includes mrun; a low-level OCI-compliant container runtime. This project is currently in the works, but I am currently reading into and implementing a lot of what I am learning - which is mostly around Linux Kernel features such as namespaces and cgroups, virtual filesystems, virtual networking, seccomp, and all things process isolation. I'm also learning a lot about OCI (Open Container Initiative) specifications so that my project complies with industry standards for runtimes, images, etc. In building this project, I am also learning about creating and testing CLI tools with the intent of distribution. Working closely with the Linux Kernel is something that I am really enjoying thus far.",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: ["Linux", "Containerization", "Go", "C"]
    },
    {
        projectName: "eefenn-cli",
        projectBrief: "A command-line tool for managing scripts and automation workflows on Ubuntu. I created this tool because it was something that I wanted for some repetitive tasks that were cropping up with eefenn (hence why it is creatively named eefenn-cli). This command-line tool is essentially a command-line manager for local automation tasks. It provides a simple interface to create, manage, and run scripts.",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/eefenn-cli",
        technologies: ["Linux", "Automation", "Go", "C"]
    },
    {
        projectName: "os--char-dev",
        projectBrief: "This project was an end-of-block project in college for Operating Systems with Mark Burkley. Mark's approach is one that has made me enjoy college a lot this block. He embraces and invests himself in anything curricular and extracurricular that can help make good engineers, not just focusing exclusively and strictly on a curriculum – even though he leaves no stone unturned in that regard too. I thought that it would only be right to showcase the content being applied – because at the end of the day, that is what matters. Mark's lectures included various topics, not just about operating systems but also open source and free software, virtualization, concurrency, kernel module development, and the Unix programming interface in C – just to name a few. This project was intended to be a demonstration of some of the topics covered; hence, it is a loadable kernel module with an accompanying user-space application. The project that I was a part of was a character device driver to get system information from kernel space and a multithreaded server to serve the data in JSON format to client processes – both written in C. I loved this module, especially the focus on the information being put to use. I thought the project was worth showcasing as well. Kudos to you, Mark – it was some craic!",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/os--char-dev--lkm",
        technologies: ["Linux", "Device Drivers", "C", "Unit Testing"]
    },
];

const standardContentCreationStack: string[] = ["Adobe Premiere Pro", "Adobe After Effects", "Photoshop", "Mapbox", "Geolayers 3"];

const ContentCreationProjects: ProjectInterface[] = [
    {
        projectName: "The Russian Spy who bought European Basketball...",
        projectBrief: "This short story is about a man called Shabtai Kalmanovic, a Russian Oligarch who was also a European basketball patron. He reportedly had a very tumultuous life which lead to his untimely and gruesome death in November of 2009.\n",
        videoLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: standardContentCreationStack
    },
    {
        projectName: "Say goodbye to Brittney Griner, unless...",
        projectBrief: "This is a story about the American WNBA star Brittney Griner, who was arrested in early 2022 in Moscow airport. This video covers the suspicions around her arrest, and the high stakes trade needed to return Brittney home.\n",
        videoLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: standardContentCreationStack
    },
    {
        projectName: "The Gavin Grant Story: Part time Footballer, Part time Hitman...",
        projectBrief: "This video is about a young man called Gavin Grant, who was a talented footballer from North-West London. As Grant's footballing career began to slip away, he turned to the streets and was eventually incarcerated for murder.\n",
        videoLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: standardContentCreationStack
    },
    {
        projectName: "Liverpool's dark formula to success...",
        projectBrief: "This video is about Liverpool FC and their alleged use of Salbutamol (often found in inhalers) as an enhancer for their players respiratory performance on the pitch. This video also covers Liverpool's purchase by American owners, who brought with them data analysis that proved transformative in the club's recent years.\n",
        videoLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: standardContentCreationStack
    },

]

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p className={"small-separator"}>Projects have always been my primary method of learning. I am a really hands on person, and I think there is a massive amount of this craft that is learned by practicing creating things. Here are some of the projects I have been working on - most of which are not curricular.</p>
            <h2 id={"software-projects"} className={"medium-separator light-border-top small-padding-top"}>Software Projects</h2>
            <p className="small-separator">The following are some of the software projects that I have been working on. Hopefully they demonstrate that not only have I developed solid technical skills, but that I also have a strong product mindset and attention to detail.
                Click on the links to see the source code or the live sites.
            </p>
            {SoftwareProjects.map((p) => (
                <Project
                    key={p.projectName} // Ensure uniqueness
                    projectName={p.projectName}
                    projectBrief={p.projectBrief}
                    projectSourceCodeLink={p.projectSourceCodeLink}
                    technologies={p.technologies}
                />
            ))}
            <h2 id={"content-creation"} className={"medium-separator light-border-top small-padding-top"}>Content Creation Projects</h2>
            <p className={"small-separator"}>The following are some of the content creation projects I've worked on. I think they show how I've developed a passion (and very solid skills) for story telling through the use of technology (mostly the Adobe Suite). All graphics were created by myself.</p>
            {ContentCreationProjects.map((p) => (
                <Project
                    key={p.projectName} // Ensure uniqueness
                    projectName={p.projectName}
                    projectBrief={p.projectBrief}
                    projectSourceCodeLink={p.projectSourceCodeLink}
                    technologies={p.technologies}
                />
            ))}
        </div>
    );
}
