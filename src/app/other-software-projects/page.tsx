"use client"

import {ProjectInterface} from "@/components/projects/project/Project";
import {
    SoftwareProjectInterface,
    SoftwareProjects,
    SoftwareProjectsInterface
} from "@/components/software-project/SoftwareProject";

interface OtherSoftwareProjectsInterface {
    metadata: ProjectInterface;
    repoName: string;
}

const OtherSoftwareProjects: SoftwareProjectInterface[] = [
    {
        project: {
            projectName: "Thread Pooled Server",
            projectBrief: "A multithreaded server to demonstrate the use of a character device. Written in C.",
            technologies: ["Linux", "C", "Concurrent Programming"],
            startDate: "March 2023",
            endDate: "March 2025"
        },
        repo: {
            repoName: "os--char-dev--u3",
            description: "Third iteration of the user space application to demonstrate usage of the character device\n",
            repoURL: "https://github.com/mikeyfennelly1/os--char-dev--u3",
        }
    },
    {
        project: {
            projectName: "mfennelly.dev",
            projectBrief: "The website you are on right now!",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/mfennelly.dev",
            technologies: ["TypeScript", "Next.js"],
            startDate: "April 2025",
            endDate: "April 2025"
        },
        repo: {
            repoName: "mfennelly.dev",
            description: "Source for my personal website\n",
            repoURL: "https://github.com/mikeyfennelly1/mfennelly.dev",
        }

    },
]

export default function Page() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Other Software Projects</h1>
                <p className={"small-separator medium-bottom-separator"}>Some other software projects.</p>
                <SoftwareProjects projects={OtherSoftwareProjects}
                ></SoftwareProjects>
            </section>
        </>
    )
}