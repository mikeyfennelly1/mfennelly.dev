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
    {
        project: {
            projectName: "simple-ns-info",
            projectBrief: "A simple loadable kernel module to retrieve information about the namespaces on a host (an essential kernel feature in container technology). This can be inconvenient information to try and get from userspace, so the idea of this module is to make it a little more clean and convenient.",
            technologies: ["Linux", "Device Drivers", "C", "Unit Testing"],
            startDate: "February 2024",
            endDate: "February 2024"
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