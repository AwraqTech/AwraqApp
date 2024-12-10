"use client"

import { useState } from 'react'

export default function useToggleSteps() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === totalSteps;

    return {
        currentStep,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
        isStepCompleted: (step: number) => step < currentStep,
        isStepActive: (step: number) => step === currentStep,
    };
}