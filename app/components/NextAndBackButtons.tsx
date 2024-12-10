"use client"

import React from 'react'
import { useStep } from '../context/StepContext';
import useSidebarLogic from '../hooks/useSidebarCollapse';
import { useTranslations } from 'next-intl';

export default function NextAndBackButtons() {
    const { nextStep, prevStep, isFirstStep, isLastStep } = useStep();
    const { isArabic } = useSidebarLogic();
    const t = useTranslations('CompleteInformation');

    return (
        <div className='flex flex-row justify-between items-center w-full max-w-7xl mx-auto'>
            {!isFirstStep && !isLastStep && (
                <button onClick={prevStep}>
                    <span className='text-black dark:text-white text-lg flex flex-row justify-start items-center gap-2'>
                        <i className={`ri-arrow-${!isArabic ? 'right' : 'left'}-s-line`} />
                        <p>{t('prevBtn')}</p>
                    </span>
                </button>
            )}
            {isFirstStep && (<div />)}
            {!isLastStep && (
                <button onClick={nextStep}>
                    <span className='text-black dark:text-white text-lg flex flex-row justify-start items-center gap-2'>
                        <p>{t('nextBtn')}</p>
                        <i className={`ri-arrow-${!isArabic ? 'left' : 'right'}-s-line`} />
                    </span>
                </button>
            )}
        </div>
    );
};