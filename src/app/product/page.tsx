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
            projectBrief: <>CharlemagneDB is a <Link href="https://mikeyfennelly1.github.io/CharlamagneDB/" target="_blank" className="underline">website</Link> for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.</>,
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
            projectBrief: <>A <Link href="https://mikeyfennelly1.github.io/points-lab/" target="_blank" className="underline">website</Link> for a concept SaaS product that helps Leaving Cert students study for their exams.</>,
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
    {
        project: {
            projectName: "eefenn.com",
            projectBrief: <>The website for eefenn.com. The source code for this website is closed, so unfortunately it can't be linked here. It is a static website, created with NEXT.js with TypeScript, and served from AWS S3 & AWS CloudFront.</>,
            technologies: ["NEXT.js", "CSS", "TypeScript", "AWS", "Figma"],
            startDate: "April 2025",
            endDate: "April 2025"
        },
        repo: {
            repoName: "eefenn.com",
            description: "Website for eefenn.com. Created with NEXT/TypeScript\n",
            repoURL: "/"
        }
    },
]

export default function Product() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Product Mockups</h1>
                <p className={"small-separator max-md:mb-[50px]"}>My interest in technology is the birth-child of my interest in products that people love. Along the way I invested some time in the more customer facing elements of what creates a complete product. This is an important aspect of my attitude to tech, I thought it was worth sharing...</p>
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
