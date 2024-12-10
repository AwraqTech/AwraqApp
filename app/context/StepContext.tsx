"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface StepContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isStepCompleted: (step: number) => boolean;
  isStepActive: (step: number) => boolean;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider = ({ children }: StepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

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

  const isStepCompleted = (step: number) => step < currentStep;
  const isStepActive = (step: number) => step === currentStep;

  return (
    <StepContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        isFirstStep,
        isLastStep,
        isStepCompleted,
        isStepActive,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStep = (): StepContextType => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};