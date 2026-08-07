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
            <div className="max-w-[calc(100vw-60px)] min-h-[300px] rounded-[3px] bg-white p-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] [&_a]:no-underline min-[800px]:mt-[30px] min-[800px]:mr-[20px] min-[800px]:mb-[50px] min-[800px]:ml-[50px]">
                    <div className={"flex gap-[20px]"}>
                        <img className={"max-h-[50px]"} src='/profile-photo.png' alt=""/>
                        <div className={"min-w-fit"}>
                            <Link href={repoURL} target={"_blank"}>
                                <button className={"cursor-pointer rounded-full bg-white px-[10px] py-[15px] text-xs text-black"}><img src="/github-mark.svg" width="16" style={{display: "inline", marginRight: "3px"}}/>mikeyfennelly1/{repoName}</button>
                            </Link>
                        </div>
                    </div>
                    <p className={"mt-[10px] text-base"}>
                        {description}
                    </p>
                    <div className={"mt-[10px] flex gap-[10px]"}>
                        {topics?.map((topic) => (
                            <span key={Math.random()} className={"rounded-full bg-[#efefef] px-[10px] py-[5px] text-xs"}>{topic}</span>
                        ))}
                    </div>
                    <div className={"mt-12 flex min-h-full flex-wrap [&>*]:mr-[10px] [&>*]:inline [&>*]:min-w-fit"}>
                        {technologies?.map((tech) => (
                            <span key={Math.random()} className={" flex"}>{tech}</span>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default Repo;
