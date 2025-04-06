// pages/repos.tsx
import { useEffect, useState } from "react";

interface RepoInterface {
    repoName: string;
}

const Repo = (repoName: string) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/mikeyfennelly1/mrun`, {
                    headers: {
                        Authorization: `Bearer: ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github+json",
                    }
                });
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error("Failed to fetch repos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <div>Loading mrun...</div>;

    return (
        <div className="p-6">
        </div>
    );
};

export default Repo;
