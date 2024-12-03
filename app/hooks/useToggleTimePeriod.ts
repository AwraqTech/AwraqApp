"use client"

import { useState } from 'react';

export default function useToggleTimePeriod() {
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<string>('24h');

    const handleTimePeriodChange = (timePeriod: string) => {
        setSelectedTimePeriod(timePeriod);
    };

    return {
        selectedTimePeriod,
        handleTimePeriodChange
    }
}
