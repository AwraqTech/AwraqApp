"use client"

import React, { useEffect } from 'react'
import confetti from 'canvas-confetti';

type Props = {
    celebrationTtile: string;
    celebrationDescription: string;
}

export default function CelebrationSuccess({celebrationDescription, celebrationTtile}: Props) {
    useEffect(() => {
        const shootConfetti = () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        };
        shootConfetti();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-3xl font-bold'>{celebrationTtile}</h1>
            <p className='text-gray-500 dark:text-gray-400 lg:text-right'>{celebrationDescription}</p>
        </div>
    );
};