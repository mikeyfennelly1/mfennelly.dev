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
            <div className={"medium-separator"}>
                <h3><span className={"bold"}>{jobTitle}</span> - <span className={"font-light"}>{company}</span></h3>
                <h4>{startDate} - {endDate}</h4>
                <p className={"small-separator"}>{description}</p>
                {children}
            </div>
        </>
    )
}
