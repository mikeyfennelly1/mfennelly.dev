import "./project.css"

export interface ProjectInterface {
    // the name of the project
    projectName: string;

    // a brief message of  what the project was about the project.
    projectBrief: string;

    // the technologies used in the creation of the project (languages, frameworks etc.)
    technologies: string[];

    // link to the source code for the project on Github
    projectSourceCodeLink: string;
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
export default function Project({projectName, projectBrief, projectSourceCodeLink, technologies}: ProjectInterface) {
    return (
        <>
            <h1>{projectName}</h1>
            <p>{projectBrief}</p>
            {/*
                Loop through each technology in the list
                creating a span element for each
             */}
            {technologies.map((technology) => (
                <span>{technology}</span>
            ))}

            <a href={projectSourceCodeLink}>Source Code</a>
        </>
    )
}
