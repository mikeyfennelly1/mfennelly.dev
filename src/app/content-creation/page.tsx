import "./content-creation.css"

import Project from "@/components/projects/project/Project";
import YoutubeEmbed from "@/components/youtube-embed/YoutubeEmbed";

const standardContentCreationStack: string[] = ["Adobe Premiere Pro", "Adobe After Effects", "Photoshop", "Mapbox", "Geolayers 3"];

interface ContentCreationProjectInterface {
    videoName: string;
    videoBrief: string;
    videoId: string;
    technologies: string[];
}

const ContentCreationProjects: ContentCreationProjectInterface[] = [
    {
        videoName: "The Russian Spy who bought European Basketball...",
        videoBrief: "This short story is about a man called Shabtai Kalmanovic, a Russian Oligarch who was also a European basketball patron. He reportedly had a very tumultuous life which lead to his untimely and gruesome death in November of 2009.\n",
        videoId: "qUUy8aQQ4U4",
        technologies: standardContentCreationStack
    },
    {
        videoName: "Say goodbye to Brittney Griner, unless...",
        videoBrief: "This is a story about the American WNBA star Brittney Griner, who was arrested in early 2022 in Moscow airport. This video covers the suspicions around her arrest, and the high stakes trade needed to return Brittney home.\n",
        videoId: "JocyMZ3gkOc",
        technologies: standardContentCreationStack
    },
    {
        videoName: "The Gavin Grant Story: Part time Footballer, Part time Hitman...",
        videoBrief: "This video is about a young man called Gavin Grant, who was a talented footballer from North-West London. As Grant's footballing career began to slip away, he turned to the streets and was eventually incarcerated for murder.\n",
        videoId: "mz65-8wqRxo",
        technologies: standardContentCreationStack
    },
    {
        videoName: "Liverpool's dark formula to success...",
        videoBrief: "This video is about Liverpool FC and their alleged use of Salbutamol (often found in inhalers) as an enhancer for their players respiratory performance on the pitch. This video also covers Liverpool's purchase by American owners, who brought with them data analysis that proved transformative in the club's recent years.\n",
        videoId: "1fD_B0_BUsE&t",
        technologies: standardContentCreationStack
    },
]

export default function Product() {
    return (
        <section>
            <div>

                <h1 className={"large-padding-gap-top"}>Content Creation Projects</h1>
                <p className={"small-separator"}>The following are some of the content creation projects I've worked on. I think they show how I've developed a passion (and very solid skills) for story telling through the use of technology (mostly the Adobe Suite). All graphics were created by myself.</p>
                {ContentCreationProjects.map((p) => (
                    <div
                        key={p.videoName}
                        className="large-separator project-columns">
                            <Project
                                key={p.videoName} // Ensure uniqueness
                                projectName={p.videoName}
                                projectBrief={p.videoBrief}
                                projectSourceCodeLink={""}
                                technologies={p.technologies}
                            />
                        <div className={"video-container"}>
                            <YoutubeEmbed videoId={p.videoId}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
