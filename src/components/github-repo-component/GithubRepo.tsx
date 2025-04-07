import "./github-repo.css"

import { useEffect, useState } from "react";
import Link from "next/link";
import {GeistMono} from "geist/font/mono";

interface RepoMetaData {
    name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    html_url: string;
    description: string;
    topics: string[];
}

export interface CommitInfo {
    committer: {
        date: string
    };
    author: {
        name: string;
        date: string;
    }
}

interface RepoInterface {
    repoName: string;
    technologies?: string[];
}

const Repo = ({ repoName, technologies }: RepoInterface) => {
    const [metadata, setMetadata] = useState<RepoMetaData | null>(null);
    const [commitHistoryData, setCommitHistoryData] = useState<CommitDay[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const metadataRes = await fetch(`https://api.github.com/repos/mikeyfennelly1/${repoName}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github+json",
                    }
                });
                let repoMetadata = await metadataRes.json();
                setMetadata(repoMetadata)
            } catch (err) {
                console.error("Failed to fetch repo:", err);
            } finally {
                setLoading(false);
            }
        };

        const fetchCommitHistoryInfo = async () => {
            try {
                const commitHistoryRes = await fetch(`https://api.github.com/repos/mikeyfennelly1/${repoName}/commits`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github+json",
                    }
                });
                let commitHistoryFetchedData = await commitHistoryRes.json();

                // Filter only relevant fields for CommitInfo
                const filteredCommitData: CommitInfo[] = commitHistoryFetchedData.map((commit: any) => ({
                    committer: {
                        date: commit.commit?.committer?.date ?? "",
                    },
                    author: {
                        name: commit.commit?.author?.name ?? "",
                        date: commit.commit?.author?.date ?? "",
                    }
                }));

                let commitDays: CommitDay[] = getDailyCommitCounts(filteredCommitData);

                setCommitHistoryData(commitDays);
            } catch (err) {
                console.error("Failed to fetch repo:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMetadata();
        fetchCommitHistoryInfo();
    }, []);

    if (loading) return (
        <div className="repo-card repo-card-drop-shadow">
            <div className={"top-card"}>
                <div className={"skeleton-profile-picture skeleton"}/>
                <div className={"repo-title-owner-container repo-title-owner-container-skeleton"}>
                    <h6 className={`repo-title skeleton-text ${GeistMono.className}`}></h6>
                    <h6 className={"repo-owner skeleton-text"}></h6>
                </div>
                <div className={"repo-project-source-code-container-skeleton skeleton"}>
                </div>
            </div>
            <div className={"repo-topics small-separator"}>
            </div>
        </div>
    );

    return (
        <>
            {
                metadata ?
                    <div className="repo-card repo-card-drop-shadow">
                        <div className={"top-card"}>
                            <img className={"repo-owner-avatar"} src={metadata.owner.avatar_url} alt=""/>
                            <div className={"repo-title-owner-container"}>
                                <h6 className={`repo-title ${GeistMono.className}` }>{metadata.name}</h6>
                                <h6 className={"repo-owner"}>{metadata.owner.login}</h6>
                            </div>
                            <div className={"repo-project-source-code-container"}>
                                <Link href={metadata.html_url} target={"_blank"}>
                                    <button className={"repo-project-source-code-button"}>Source Code</button>
                                </Link>
                            </div>
                        </div>
                        <p className={"repo-description small-separator"}>
                            {metadata.description}
                        </p>
                        <div className={"repo-topics small-separator"}>
                            {metadata.topics.map((topic) => (
                                <span key={Math.random()} className={"repo-topic"}>{topic}</span>
                            ))}
                        </div>
                        <div className={"technologies-container"}>
                            {technologies?.map((tech) => (
                                <span key={Math.random()} className={" flex"}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    :

                    <></>
            }
        </>
    );
};

export default Repo;

export type CommitDay = {
    date: string;
    commitCount: number;
}

function getDailyCommitCounts(commitData: CommitInfo[]): CommitDay[] {
    const commitDaysMap: Record<string, number> = {};

    for (const commit of commitData) {
        // Extract just the date (no time)
        const dateOnly = commit.author.date.split('T')[0];
        if (!commitDaysMap[dateOnly]) {
            commitDaysMap[dateOnly] = 0;
        }
        commitDaysMap[dateOnly]++;
    }

    // Convert map to array
    const commitDays: CommitDay[] = Object.entries(commitDaysMap).map(
        ([date, count]) => ({
            date, // This will be a string like "2025-03-22"
            commitCount: count,
        })
    );

    return commitDays;
}
