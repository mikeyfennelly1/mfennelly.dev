import "./github-repo.css"

import { useEffect, useState } from "react";
import Link from "next/link";
import {GeistMono} from "geist/font/mono";

export const mikeyFennelly1 = "mikeyfennelly1"

export interface RepoInterface {
    repoName: string;
    description: string;
    technologies?: string[];
    topics?: string[];
    repoURL: string;
}

const Repo = ({ repoName, description, technologies, topics, repoURL }: RepoInterface) => {
    return (
        <>
            <div className="repo-card repo-card-drop-shadow">
                    <div className={"top-card"}>
                        <img className={"repo-owner-avatar"} src='/profile-photo.png' alt=""/>
                        <div className={"repo-title-owner-container"}>
                            <Link href={repoURL} target={"_blank"}>
                                <button className={"repo-project-source-code-button"}><img src="/github-mark.svg" width="16" style={{display: "inline", marginRight: "3px"}}/>mikeyfennelly1/{repoName}</button>
                            </Link>
                        </div>
                    </div>
                    <p className={"repo-description small-separator"}>
                        {description}
                    </p>
                    <div className={"repo-topics small-separator"}>
                        {topics?.map((topic) => (
                            <span key={Math.random()} className={"repo-topic"}>{topic}</span>
                        ))}
                    </div>
                    <div className={"technologies-container"}>
                        {technologies?.map((tech) => (
                            <span key={Math.random()} className={" flex"}>{tech}</span>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default Repo;
