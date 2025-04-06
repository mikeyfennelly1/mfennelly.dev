import { useEffect, useState } from "react";

interface RepoData {
    name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    html_url: string;
    description: string;
    topics: string[];
}

interface RepoInterface {
    repoName: string;
}

const Repo = ({ repoName }: RepoInterface) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/mikeyfennelly1/mrun`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github+json",
                    }
                });
                const data: RepoData = await res.json();

                // Log specific properties
                console.log("Repo name: ", data.name);
                console.log("Owner login: ", data.owner.login);
                console.log("Owner avatar URL: ", data.owner.avatar_url);
                console.log("HTML URL: ", data.html_url);
                console.log("Description: ", data.description);
                console.log("Topics: ", data.topics);

            } catch (err) {
                console.error("Failed to fetch repo:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <div>Loading mrun...</div>;

    return (
        <div className="p-6">
            {/* Render repo data here */}
        </div>
    );
};

export default Repo;
