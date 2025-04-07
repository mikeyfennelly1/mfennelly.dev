import "./project.css"
import {GeistMono} from "geist/font/mono";

export interface ProjectInterface {
    // the name of the project
    projectName: string;

    startDate: string;
    endDate: string;

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
export default function Project({projectName, projectBrief, projectSourceCodeLink, technologies, videoLink, startDate, endDate}: ProjectInterface) {
    return (
        <>
            <div className={"medium-separator"}>
                {projectSourceCodeLink ?
                    <h3 className={`condense accent2 ${GeistMono.className}`}>{projectName}</h3>
                    :
                    <h3 className={""}>{projectName}</h3>
                }
                <h4>{startDate} - {endDate}</h4>
                <p>{projectBrief}</p>

                <div className="small-separator">
                    {technologies.map((technology) => (
                        <span key={technology} className={"link-text-separation technology"}>{technology}</span>
                    ))}
                </div>
            </div>
        </>
    )
}
