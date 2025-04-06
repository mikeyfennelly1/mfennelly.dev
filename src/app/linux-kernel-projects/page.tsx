import Project, {ProjectInterface} from "@/components/projects/project/Project";

const SoftwareProjects: ProjectInterface[] = [
    {
        projectName: "mrun",
        projectBrief: "mrun (mike's runtime) is low-level OCI-compliant container runtime. I have been learning a lot about advanced Linux Kernel features such as namespaces and cgroups, virtual filesystems, virtual networking, seccomp, and all things process isolation. I'm also learning a lot about OCI (Open Container Initiative) specifications so that my project complies with industry standards for runtimes, images, etc. \n\n",
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
        projectBrief: "This project was an end-of-block project in college for Operating Systems with Mark. Mark's approach is one that has made me enjoy college a lot this block. Mark's lectures included various topics, not just about operating systems but also open source and free software, virtualization, concurrency, kernel module development, and the Unix programming interface in C – just to name a few. This project was intended to be a demonstration of some of the topics covered; hence, it is a loadable kernel module with an accompanying user-space application. The project that I was a part of was a character device driver to get system information from kernel space and a multithreaded server to serve the data in JSON format to client processes – both written in C.",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/os--char-dev--lkm",
        technologies: ["Linux", "Device Drivers", "C", "Unit Testing"]
    },
];

export default function LinuxKernelProjects() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Linux Kernel Projects</h1>
                <p className={"small-separator"}>Low level operating system technology is a topic that I have been getting very interested in since beginning college. Mark Burkley is a  man who has had huge influence on my work since starting college. This interest of mine has been largely fostered by Mark (perhaps unbeknownst to himself) so I have to give him his flowers for being an inspiration to some of the following work.</p>
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