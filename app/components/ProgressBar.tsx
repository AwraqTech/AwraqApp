"use client"

import React, { useEffect } from 'react'

type Props = {
    currentNumber: number;
    totalNumber: number;
    title: string;
}

export default function ProgressBar({ currentNumber, totalNumber, title }: Props) {
    const barWidth = currentNumber / totalNumber * 100;
    const barWidthString = barWidth.toLocaleString().substring(0, 4);

    useEffect(() => {
        console.log(barWidth);
        console.log(barWidthString);
    }, [])

    return (
        <div>
            <div className="mb-2 flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{title}</h3>
                <span className="text-sm text-gray-800 dark:text-white">{`${barWidthString}%`}</span>
            </div>
            <div
                className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-[#43a2fe] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-[#0067C2]"
                    style={{ width: `${barWidthString}%` }}
                ></div>
            </div>
        </div>
    )
}