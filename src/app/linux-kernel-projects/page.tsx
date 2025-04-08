"use client"

import {SoftwareProjectInterface, SoftwareProjects} from "@/components/software-project/SoftwareProject";

const LinuxKernelProjectsInfo: SoftwareProjectInterface[] = [
    {
        project: {
            projectName: "mrun",
            projectBrief: "mrun (mike's runtime) is low-level OCI-compliant container runtime. I have been learning a lot about advanced Linux Kernel features such as namespaces and cgroups, virtual filesystems, virtual networking, seccomp, and all things process isolation. I'm also learning a lot about OCI (Open Container Initiative) specifications so that my project complies with industry standards for runtimes, images, etc. \n\n",
            technologies: ["Linux", "Containerization", "Go", "C"],
            startDate: "September 2023",
            endDate: "Current"
        },
        repo: {
            repoName: "mrun",
            description: "A low-level OCI compliant container runtime for modern Linux.\n",
            repoURL: "https://github.com/mikeyfennelly1/mrun"
        }
    },
    {
        project: {
            projectName: "eefenn-cli",
            projectBrief: "A command-line tool for managing scripts and automation workflows on Ubuntu. I created this tool because it was something that I wanted for some repetitive tasks that were cropping up with eefenn (hence why it is creatively named eefenn-cli). This command-line tool is essentially a command-line manager for local automation tasks. It provides a simple interface to create, manage, and run scripts.",
            technologies: ["Linux", "Automation", "Go"],
            startDate: "March 2024",
            endDate: "April 2024"
        },
        repo: {
            repoName: "eefenn-cli",
            description: "A tool for managing automation via the shell. Created for Debian/Ubuntu.\n",
            repoURL: "https://github.com/mikeyfennelly1/eefenn-cli"
        }
    },
    {
        project: {
            projectName: "os--char-dev--lkm",
            projectBrief: "This project was an end-of-block project in college for Operating Systems with Mark. This project was intended to be a demonstration of some of the topics covered; hence, it is a loadable kernel module with an accompanying user-space application. The project that I was a part of was a character device driver to get system information from kernel space and a multithreaded server to serve the data in JSON format to client processes – both written in C.",
            technologies: ["Linux", "Device Drivers", "C", "Unit Testing"],
            startDate: "March 2024",
            endDate: "March 2024"
        },
        repo: {
            repoName: "os--char-dev--lkm",
            description: "Sysinfo character device for operating systems major\n",
            repoURL: "https://github.com/mikeyfennelly1/os--char-dev--lkm"
        }
    },

];

export default function LinuxKernelProjects() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Linux Kernel Projects</h1>
                <p className={"small-separator medium-bottom-separator"}>Low level operating system technology is a topic that I have been getting very interested in since beginning college. Mark Burkley is a  man who has had huge influence on my work since starting college. This interest of mine has been largely fostered by Mark (perhaps unbeknownst to himself) so I have to give him his flowers for being an inspiration to some of the following work.</p>
                <SoftwareProjects
                    projects={LinuxKernelProjectsInfo}
                ></SoftwareProjects>
            </section>
        </>
    )
}