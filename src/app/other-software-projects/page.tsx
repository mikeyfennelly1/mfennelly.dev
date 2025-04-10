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
            projectName: "Brain Tumor Classifier",
            projectBrief: "This project is an image classifier that uses a convolutional neural network to classify brain scans, predicting if patients have brain tumors.\n",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/brainTumorClassifier",
            technologies: ["Python", "Tensorflow", "Keras", "OpenCV", "Matplotlib", "Pandas"],
            startDate: "April 2023",
            endDate: "April 2023"
        },
        repo: {
            repoName: "brainTumorClassifier",
            description: "A convolutional deep neural network for brain scan classification.\n",
            repoURL: "https://github.com/mikeyfennelly1/brainTumorClassifier"
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