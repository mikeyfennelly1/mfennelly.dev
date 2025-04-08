import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo, {RepoInterface} from "@/components/github-repo-component/GithubRepo";

export interface SoftwareProjectInterface {
    project: ProjectInterface;
    repo: RepoInterface;
}

export interface SoftwareProjectsInterface {
    projects: SoftwareProjectInterface[];
}

export function SoftwareProjects({projects}: SoftwareProjectsInterface) {
    return (
        <>
            {projects.map((p) => (
                <div key={Math.random()} className={"project-columns"}>
                    <Project
                        startDate={p.project.startDate}
                        endDate={p.project.endDate}
                        key={Math.random()}
                        projectName={p.project.projectName}
                        projectBrief={p.project.projectBrief}
                        projectSourceCodeLink={p.project.projectSourceCodeLink}
                    />
                    <GithubRepo
                        technologies={p.project.technologies}
                        key={Math.random()}
                        repoName={p.repo.repoName}
                        description={""}
                        repoURL={p.repo.repoURL}>
                    </GithubRepo>
                </div>
            ))}
        </>
    )
}

export default function SoftwareProject({project, repo}: SoftwareProjectInterface) {
    return (
        <>
            <section>
                    <div key={Math.random()} className={"project-columns"}>
                        <Project
                            startDate={project.startDate}
                            endDate={project.endDate}
                            key={Math.random()}
                            projectName={project.projectName}
                            projectBrief={project.projectBrief}
                        />
                        <GithubRepo
                            technologies={project.technologies}
                            key={Math.random()}
                            repoName={repo.repoName}
                            description={repo.description}
                            repoURL={repo.repoURL}>
                        </GithubRepo>
                    </div>
            </section>
        </>
    )
}
