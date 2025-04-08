"use client"

import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo from "@/components/github-repo-component/GithubRepo";

interface OtherSoftwareProjectsInterface {
    metadata: ProjectInterface;
    repoName: string;
}

const OtherSoftwareProjects: OtherSoftwareProjectsInterface[] = [
    {
        metadata: {
            projectName: "Thread Pooled Server",
            projectBrief: "A multithreaded server to demonstrate the use of a character device. Written in C.",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/os--char-dev--u3",
            technologies: ["Linux", "C", "Concurrent Programming"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repoName: "os--char-dev--u3"
    },
    {
        metadata: {
            projectName: "mfennelly.dev",
            projectBrief: "The website you are on right now!",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/mfennelly.dev",
            technologies: ["TypeScript", "Next.js", "REST"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repoName: "mfennelly.dev"
    },
]

export default function Page() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Other Software Projects</h1>
                <p className={"small-separator medium-bottom-separator"}>Some other software projects.</p>
                {OtherSoftwareProjects.map((p) => (
                    <div key={Math.random()} className={"project-columns"}>
                        <Project
                            startDate={p.metadata.startDate}
                            endDate={p.metadata.startDate}
                            key={Math.random()}
                            projectName={p.metadata.projectName}
                            projectBrief={p.metadata.projectBrief}
                            projectSourceCodeLink={p.metadata.projectSourceCodeLink}
                            technologies={p.metadata.technologies}
                        />
                        {/*<GithubRepo*/}
                        {/*    key={Math.random()}*/}
                        {/*    repoName={p.repoName}>*/}
                        {/*</GithubRepo>*/}
                    </div>
                ))}
            </section>

        </>
    )
}