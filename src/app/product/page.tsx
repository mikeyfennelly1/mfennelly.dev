"use client"

import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo from "@/components/github-repo-component/GithubRepo";
import {SoftwareProjectInterface} from "@/components/software-project/SoftwareProject";

const ProductMockups: SoftwareProjectInterface[] = [
    {
        project: {
            projectName: "CharlemagneDB",
            projectBrief: "CharlemagneDB is an website for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.\n",
            technologies: ["React", "GSAP", "TailwindCSS", "Figma", "Adobe XD", "Docker", "Framer Motion", "Firebase"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repo: {
            repoName: "brainTumorClassifier",
            description: "A database prototype website created in Tailwind CSS, GSAP and React.\n",
            repoURL: "https://github.com/mikeyfennelly1/CharlamagneDB"
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
