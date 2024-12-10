"use client"

import { useStep } from '@/app/context/StepContext';
import AddressInfoStap from '@/app/ui/complete-information/AddressInfoStap';
import EstablishmentStep from '@/app/ui/complete-information/EstablishmentStep';
import FinalizeStep from '@/app/ui/complete-information/FinalizeStep';
import PersonalInfoStep from '@/app/ui/complete-information/PersonalInfoStep';
import PlanSelectionStep from '@/app/ui/complete-information/PlanSelectionStep';
import React from 'react'

export default function CompleteInformation() {
  const { currentStep } = useStep();

  return (
    <div className='flex flex-col lg:min-h-[700px] min-h-[450px]'>
      {currentStep === 1 && (
        <EstablishmentStep />
      )}
      {currentStep === 2 && (
        <PersonalInfoStep />
      )}
      {currentStep === 3 && (
        <AddressInfoStap />
      )}
      {currentStep === 4 && (
        <PlanSelectionStep />
      )}
      {currentStep === 5 && (
        <FinalizeStep />
      )}
    </div>
  );
};