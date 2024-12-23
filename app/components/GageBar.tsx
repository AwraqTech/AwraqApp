import React from 'react'

type Props = {
    score: number;
    duration: string | null;
    title: string;
}

export default function GageBar({ score, title, duration }: Props) {
    return (
        <div className="relative size-36 w-full">
            <svg className="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle (Gauge) */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="1"
                    strokeDasharray="50 100"
                    strokeLinecap="round"
                ></circle>

                {/* Gauge Progress */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#43a2fe]"
                    stroke="#43a2fe"
                    strokeWidth="1.5"
                    strokeDasharray="37.5 100"
                    strokeLinecap="round"
                ></circle>
            </svg>

            {/* Value Text */}
            <div className="absolute top-9 text-center w-full">
                <span className="text-2xl font-bold">{score} {duration}</span>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{title}</h3>
            </div>
        </div>

    )
}