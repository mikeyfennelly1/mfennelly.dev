"use client"

import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo from "@/components/github-repo-component/GithubRepo";
import {SoftwareProjectInterface} from "@/components/software-project/SoftwareProject";
import Link from "next/link";
import {underline} from "next/dist/lib/picocolors";

const ProductMockups: SoftwareProjectInterface[] = [
    {
        project: {
            projectName: "CharlemagneDB",
            projectBrief: <>CharlemagneDB is a <Link href="https://mikeyfennelly1.github.io/CharlamagneDB/" target="_blank" className={"bold accent1 underline"}>website</Link> for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.</>,
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/CharlamagneDB",
            technologies: ["React", "GSAP", "TailwindCSS", "Figma", "Adobe XD", "Docker", "Framer Motion", "Firebase"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repo: {
            repoName: "CharlemagneDB",
            description: "A database prototype website created in Tailwind CSS, GSAP and React.\n",
            repoURL: "https://github.com/mikeyfennelly1/CharlamagneDB"
        }
    },
    {
        project: {
            projectName: "points-lab",
            projectBrief: <>A <Link href="https://mikeyfennelly1.github.io/points-lab/" target="_blank" className={"bold accent1 underline"}>website</Link> for a concept SaaS product that helps Leaving Cert students study for their exams.</>,
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/points-lab",
            technologies: ["HTML5", "CSS", "Adobe Photoshop", "Adobe Illustrator"],
            startDate: "June 2023",
            endDate: "November 2023"
        },
        repo: {
            repoName: "points-lab",
            description: "Source for my personal website\n",
            repoURL: "https://github.com/mikeyfennelly1/points-lab",
        }
    },
]

export default function Product() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Product Mockups</h1>
                <p className={"small-separator max-md:mb-[50px]"}>
                    My interest in technology <Link href="/about-me" target="_blank" className={"bold accent1 underline"}>started with my interest in building products that people love</Link>.
                    Along the way I invested some time in the more customer facing elements of what creates a great product.
                    This is an important aspect of my attitude to tech, so I think it's worth sharing some of the project mockups I built as a way to help myself learn some of the
                    technologies in question.
                </p>
                {ProductMockups.map((p) => (
                    <div key={Math.random()} className={"project-columns"}>
                        <Project
                            startDate={p.project.startDate}
                            endDate={p.project.endDate}
                            key={Math.random()}
                            projectName={p.project.projectName}
                            projectBrief={p.project.projectBrief}
                            projectSourceCodeLink={p.project.projectSourceCodeLink}
                        />
                        <GithubRepo
                            technologies={p.project.technologies}
                            key={Math.random()}
                            repoName={p.repo.repoName}
                            description={""}
                            repoURL={p.repo.repoURL}>
                        </GithubRepo>
                    </div>
                ))}

            </section>

        </>
    )
}