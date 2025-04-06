import Project, {ProjectInterface} from "@/components/projects/project/Project";

const ProductMockups: ProjectInterface[] = [
    {
        projectName: "CharlemagneDB",
        projectBrief: "CharlemagneDB is an website for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.\n",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/CharlamagneDB",
        technologies: ["React", "GSAP", "TailwindCSS", "Figma", "Adobe XD", "Docker", "Framer Motion", "Firebase"]
    },
    {
        projectName: "Brain Tumor Classifier",
        projectBrief: "This project is an image classifier that uses a convolutional neural network to classify brain scans, predicting if patients have brain tumors.\n",
        projectSourceCodeLink: "https://github.com/mikeyfennelly1/brainTumorClassifier",
        technologies: [""]
    },
]

export default function Product() {
    return (
        <>
            <section>
                <h1 className={"large-padding-gap-top"}>Product Mockups</h1>
                <p className={"small-separator"}>My interest in technology is the birth-child of my interest in products that people love. Along the way I invested some time in the more customer facing elements of what creates a complete product. This is an important aspect of my attitude to tech, I thought it was worth sharing...</p>
                {ProductMockups.map((p) => (
                    <Project
                        key={p.projectName}
                        projectName={p.projectName}
                        projectBrief={p.projectBrief}
                        technologies={p.technologies}
                        projectSourceCodeLink={p.projectSourceCodeLink}
                    ></Project>
                ))}
            </section>

        </>
    )
}