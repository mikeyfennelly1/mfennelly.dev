import './experience.css'
import ExperienceItem, {ExperienceItemInterface} from "@/components/experience/experience-item/ExperienceItem";

interface ExperienceInterface {
    experienceItems: ExperienceItemInterface[]
}

export default function Experience({experienceItems}: ExperienceInterface) {
    return (
        <>
            <div>
                <h1>Experience</h1>
                {experienceItems.map((experience) => (
                    <ExperienceItem
                        key={experience.jobTitle}
                        jobTitle={experience.jobTitle}
                        company={experience.company}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        companyLink={experience.companyLink}
                    ></ExperienceItem>
                ))}
            </div>
        </>
    )
}
