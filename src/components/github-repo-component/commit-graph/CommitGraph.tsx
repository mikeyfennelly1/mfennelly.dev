import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
// Import the date adapter
import 'chartjs-adapter-date-fns';
import {CommitDay} from "@/components/github-repo-component/GithubRepo";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale);

interface CommitGraphProps {
    commits: CommitDay[];
}

const CommitGraph: React.FC<CommitGraphProps> = ({commits}: CommitGraphProps) => {
    console.log("commits: ", commits)

    // Prepare data for Chart.js
    const chartData = {
        labels: commits.map((commit: CommitDay) => commit.date),
        datasets: [
            {
                label: '',
                data: commits.map((commit: CommitDay) => commit.commitCount),
                fill: false,
                borderColor: 'rgba(0,0,0,1)',
                pointRadius: 0, // Hide points
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false, // Hide title
            },
            tooltip: {
                enabled: false, // Hide tooltip
            },
            legend: {
                display: false, // Hide legend
            },
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day', // Adjust depending on your time granularity (minute, hour, day, etc.)
                },
                grid: {
                    display: false, // Optional: hide grid lines
                },
                ticks: {
                    display: false, // Hide x-axis labels
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false, // Disable y-axis grid lines
                },
                ticks: {
                    display: false, // Hide y-axis labels
                },
            },
        },
    };

    return (
        <div className="p-4 m-4">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default CommitGraph;
