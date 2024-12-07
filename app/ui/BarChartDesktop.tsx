import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from "@/app/context/ThemeContext";
import useFormateChartDesktop from '../hooks/useFormateChartDesktop';

type Dataset = {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
};

type Props = {
    labels: string[];
    datasets: Dataset[];
    selectedTimePeriod: string;
};

export default function BarChartDesktop({ labels, datasets, selectedTimePeriod }: Props) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

    const { theme } = useTheme();

    const adjustedLabels = useFormateChartDesktop(labels, selectedTimePeriod);

    const data = {
        labels: adjustedLabels,
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                titleFont: {
                    family: 'IBM Plex Sans Arabic, sans-serif',
                },
                bodyFont: {
                    family: 'IBM Plex Sans Arabic, sans-serif',
                },
            },
        },
        scales: {
            x: {
                grid: {
                    color: theme === 'dark' ? '#2b3c53' : '#e3e3e3',
                },
            },
            y: {
                grid: {
                    color: theme === 'dark' ? '#2b3c53' : '#e3e3e3',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}
