"use client"

import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo from "@/components/github-repo-component/GithubRepo";

interface ProjectMockupInterface {
    metadata: ProjectInterface;
    repoName: string
}

const ProductMockups: ProjectMockupInterface[] = [
    {
        metadata: {
            projectName: "CharlemagneDB",
            projectBrief: "CharlemagneDB is an website for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.\n",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/CharlamagneDB",
            technologies: ["React", "GSAP", "TailwindCSS", "Figma", "Adobe XD", "Docker", "Framer Motion", "Firebase"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repoName: "CharlamagneDB"
    },
    {
        metadata: {
            projectName: "Brain Tumor Classifier",
            projectBrief: "This project is an image classifier that uses a convolutional neural network to classify brain scans, predicting if patients have brain tumors.\n",
            projectSourceCodeLink: "https://github.com/mikeyfennelly1/brainTumorClassifier",
            technologies: ["Python", "Tensorflow", "Keras", "OpenCV", "Matplotlib", "Pandas"],
            startDate: "September 2023",
            endDate: "April 2024"
        },
        repoName: "brainTumorClassifier"
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
                            startDate={p.metadata.startDate}
                            endDate={p.metadata.endDate}
                            key={p.repoName}
                            projectName={p.metadata.projectName}
                            projectBrief={p.metadata.projectBrief}
                            projectSourceCodeLink={p.metadata.projectSourceCodeLink}
                        ></Project>
                        <GithubRepo repoName={p.repoName} technologies={p.metadata.technologies}
                        ></GithubRepo>
                    </div>

                ))}
            </section>

        </>
    )
}