import "./project.css"
import {GeistMono} from "geist/font/mono";

export interface ProjectInterface {
    // the name of the project
    projectName: string;

    // a brief message of  what the project was about the project.
    projectBrief: string;

    // the technologies used in the creation of the project (languages, frameworks etc.)
    technologies: string[];

    // link to the source code for the project on Github
    projectSourceCodeLink?: string;

    videoLink?: string;
}

/**
 * Function to create a project component, takes a project interface.
 *
 * @param projectName - the name of the project
 * @param projectBrief - a brief statement to describe what the project is
 * @param projectSourceCodeLink - a link to the source code for the project on GitHub
 * @param technologies - the technologies used in the creation of the project
 * @constructor
 */
export default function Project({projectName, projectBrief, projectSourceCodeLink, technologies, videoLink}: ProjectInterface) {
    return (
        <>
            <div className={"medium-separator"}>
                {projectSourceCodeLink ?
                    <h3 className={GeistMono.className}>{projectName}</h3>
                    :
                    <h3>{projectName}</h3>
                }
                <p>{projectBrief}</p>

                <div className="small-separator">
                    {technologies.map((technology) => (
                        <span key={technology} className={"link-text-separation"}>{technology}</span>
                    ))}
                </div>

                <div className="small-separator">
                    {projectSourceCodeLink ?
                        <a href={projectSourceCodeLink} target={"_blank"}>Source Code</a>
                        :
                        <a href={videoLink} target={"_blank"}>Link to Video</a>
                    }
                </div>
            </div>
        </>
    )
}
