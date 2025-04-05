import Project, {ProjectInterface} from "@/components/projects/project/Project";

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

export default function LinuxKernelProjects() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Linux Kernel Projects</h1>
                <p className={"small-separator"}>Projects have always been my primary method of learning. I am a really hands on person, and I think there is a massive amount of this craft that is learned by practicing creating things. Here are some of the projects I have been working on - most of which are not curricular.</p>
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
            </section>

        </>
    )
}