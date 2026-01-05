import "./project.css"
import {GeistMono} from "geist/font/mono";
import {ReactNode} from "react";

export interface ProjectInterface {
    // the name of the project
    projectName: string;

    startDate: string;
    endDate: string;

    // a brief message of  what the project was about the project.
    projectBrief: ReactNode;

    // the technologies used in the creation of the project (languages, frameworks etc.)
    technologies?: string[];

    // link to the source code for the project on Github
    projectSourceCodeLink?: string;

    videoLink?: string;
    screenshotLink?: string;
    websiteLink?: string;
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
                    <h3 className={`condense ${GeistMono.className}`}>{projectName}</h3>
                {(startDate && endDate)?
                    <h4>{startDate} - {endDate}</h4>
                :
                    <></>
                }
                <p>{projectBrief}</p>

                <div className="small-separator">
                </div>
            </div>
        </>
    )
}
