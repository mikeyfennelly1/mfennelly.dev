import Hero from "@/components/hero/Hero";
import Project, {ProjectInterface} from "@/components/project/Project";

export default function Home() {
    return (
        <>
            <Hero></Hero>
            {Projects.map((p) => (
                <Project
                    projectName={p.projectName}
                    projectBrief={p.projectBrief}
                    projectSourceCodeLink={p.projectSourceCodeLink}
                    technologies={p.technologies}
                ></Project>
            ))}
        </>
    )
}

const Projects: ProjectInterface[] = [
    {
        projectName: "mrun",
        projectBrief: "mpod is a containerization project that I am working on currently to learn about containers and Linux operating systems. This project includes mrun; a low-level OCI compliant container runtime. This project is currently in the works, but I am currently reading into and implementing a lot of what I am learning - which is mostly around Linux Kernel features such like namespaces and cgroups, virtual filesystems, virtual networking, seccomp and all things process isolation and technologies based on container technology (mainly Kubernetes). I'm also learning a lot about OCI (Open Container Initiative) specification so that my project complies with industry standards for runtimes, images etc. In building this project I am also learning about creating and desting CLI tools with the intent of distribution. Working closesly with the Linux Kernel is something that I am really enjoying thus far.",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/mrun",
        technologies: ["Linux", "Containerization", "Go", "C"]
    },
    {
        projectName: "eefenn-cli",
        projectBrief: "A command line tool for managing scripts and automation workflows on Ubuntu. I created this tool, because it was something that I wanted for some repetetive tasks that were cropping up with eefenn (hence why it is creatively named eefenn-cli). This command line tool is essentially a command line manager for local automation tasks. It gives a simple interface to create, manage and run scripts.",
        projectSourceCodeLink: "",
        technologies: ["Linux", "Containerization", "Go", "C"]
    },
    {
        projectName: "os--char-dev",
        projectBrief: "This project was an end of block project in college for Operating Systems with Mark Burkley. Mark's approach is an one that has made me enjoy college a lot this block. He embraces and invests himself in anything curricular and extracurricular that can help make good engineers, not just focusing exclusively and strictly on a curriculum - even though he leaves no stone unturned in that regard too. I thought that it would only be right to show on my profile the content being applied - because at the end of the day that is what matters. Mark's lectures included all sorts not just about operating systems, but also topics around open source and free software, virtualization, concurrency, kernel module development and the Unix programming interface in C - just to name a few. This project was intended to be a demonstration of some of the topics covered, hence it is a loadable kernel module, with an accompanying user space application, which is multithreaded server with a REST API. The project that I was a part of was a character device driver to get system information from kernel space, and a multithreaded serve to serve the data in JSON format to client processes - both written in C. I loved this module, and especially the focus on the information being put to use. I thought the project was worth putting on my profile too. Kudos to you Mark, was some craic!\n",
        projectSourceCodeLink: "",
        technologies: ["Linux", "Device Drivers", "C", "Unit Testing"]
    },
]