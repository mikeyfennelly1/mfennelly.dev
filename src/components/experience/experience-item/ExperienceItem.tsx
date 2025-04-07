import {ReactNode} from "react";

export interface ExperienceItemInterface {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    children?: ReactNode;
}

export default function ExperienceItem(
    {
        jobTitle,
        company,
        startDate,
        endDate,
        description,
        children
    }: ExperienceItemInterface) {
    return (
        <>
            <div className={"experience-item medium-separator"}>
                <h3 className={"condense"}><span className={"bold accent1"}>{jobTitle}</span> - <span className={"font-light"}>{company}</span></h3>
                <h4 className={"accent2"}>{startDate} - {endDate}</h4>
                <p className={"small-separator"}>{description}</p>
                {children}
            </div>
        </>
    )
}
