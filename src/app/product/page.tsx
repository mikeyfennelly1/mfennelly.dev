"use client"

import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo from "@/components/github-repo-component/GithubRepo";
import {SoftwareProjectInterface} from "@/components/software-project/SoftwareProject";

const ProductMockups: SoftwareProjectInterface[] = [
    {
        project: {
            projectName: "eefenn.com",
            projectBrief: "The website for eefenn. The source code for this website is closed, so unfortunately it can't be linked here. It is a static website, created with NEXT.js with TypeScript, and served from AWS S3 & AWS CloudFront.\n",
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
    {
        project: {
            projectName: "mfennelly.dev",
            projectBrief: "The website you are on right now! This is also a static website with NEXT.js and TypeScript. This is served through GitHub pages - which is more or less the same setup as the S3 & Cloudfront combo - just a little more convenient.",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/mfennelly.dev",
            technologies: ["TypeScript", "Next.js", "Figma"],
            startDate: "April 2025",
            endDate: "April 2025"
        },
        repo: {
            repoName: "mfennelly.dev",
            description: "Source for my personal website\n",
            repoURL: "https://github.com/mikeyfennelly1/mfennelly.dev",
        }
    },
    {
        project: {
            projectName: "CharlemagneDB",
            projectBrief: "CharlemagneDB is an website for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.\n",
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
            projectBrief: "A website for a concept SaaS product that helps Leaving Cert students study for their exams.",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/points-lab",
            technologies: ["HTML5", "CSS", "Adobe Photoshop", "Adobe Illustrator"],
            startDate: "June 2023",
            endDate: "November 2023"
        },
        repo: {
            repoName: "mfennelly.dev",
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
                <p className={"small-separator"}>My interest in technology is the birth-child of my interest in products that people love. Along the way I invested some time in the more customer facing elements of what creates a complete product. This is an important aspect of my attitude to tech, I thought it was worth sharing...</p>
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
