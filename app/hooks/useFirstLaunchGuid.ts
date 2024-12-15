"use client"

import React, { useState } from 'react'

export default function useFirstLaunchGuid() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isGuidVisible, setIsGuidVisible] = useState<boolean>(true);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleCloseGuid = () => {
        setIsGuidVisible(false);
    };

    return {
        currentStep,
        isGuidVisible,
        handleCloseGuid,
        handleNextStep
    };
}