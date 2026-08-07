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
            <div className={"py-[15px] first-of-type:pt-0"}>
                <h3 className={"tracking-[-1.5px]"}><span className={"font-medium"}>{jobTitle}</span> - <Link href={companyLink} target={"_blank"} className={"font-light underline"}>{company}</Link></h3>
                <h4 className={"text-[#dcdcdc]"}>{startDate} - {endDate}</h4>
                <p className={"mt-[10px]"}>{description}</p>
                {children}
            </div>
        </>
    )
}
