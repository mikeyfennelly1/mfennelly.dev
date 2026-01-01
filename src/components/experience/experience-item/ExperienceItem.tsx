import {ReactNode} from "react";
import Link from "next/link";

export interface ExperienceItemInterface {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    companyLink: string;
    description: string;
    children?: ReactNode;
}

export default function ExperienceItem(
    {
        jobTitle,
        companyLink,
        company,
        startDate,
        endDate,
        description,
        children
    }: ExperienceItemInterface) {
    return (
        <>
            <div className={"experience-item medium-separator"}>
                <h3 className={"condense"}><span className={"bold accent1"}>{jobTitle}</span> - <Link href={companyLink} target={"_blank"} className={"font-light underline"}>{company}</Link></h3>
                <h4 className={"accent2"}>{startDate} - {endDate}</h4>
                <p className={"small-separator"}>{description}</p>
                {children}
            </div>
        </>
    )
}
