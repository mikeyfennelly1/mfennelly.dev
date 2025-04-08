import Project, {ProjectInterface} from "@/components/projects/project/Project";
import GithubRepo, {RepoInterface} from "@/components/github-repo-component/GithubRepo";

export interface SoftwareProjectInterface {
    project: ProjectInterface;
    repo: RepoInterface;
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
