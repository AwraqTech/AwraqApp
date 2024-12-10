"use client"

import { useStep } from '@/app/context/StepContext';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function Stepper({ }: Props) {
    const { currentStep } = useStep();
    const t = useTranslations('CompleteInformation');

    return (
        <div className="w-full max-w-7xl mx-auto py-4">
            <ul className="relative flex flex-row gap-x-2">
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`size-8 flex justify-center items-center shrink-0 bg-[#fafafa] border border-gray-200 font-medium text-black rounded-md shadow-sm dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white`}>
                            <i className={`ri-building-line text-lg ${currentStep === 1 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        </span>
                        <span className={`ms-2 ${currentStep === 1 ? 'block' : 'lg:block hidden'} text-sm font-medium ${currentStep === 1 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('step1')}
                        </span>
                    </div>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-[#2b3c53]"></div>
                </li>
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`size-8 flex justify-center items-center shrink-0 bg-[#fafafa] border border-gray-200 font-medium text-black rounded-md shadow-sm dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white`}>
                            <i className={`ri-account-box-line text-lg ${currentStep === 2 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        </span>
                        <span className={`ms-2 ${currentStep === 2 ? 'block' : 'lg:block hidden'} text-sm font-medium ${currentStep === 2 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('step2')}
                        </span>
                    </div>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-[#2b3c53]"></div>
                </li>
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`size-8 flex justify-center items-center shrink-0 bg-[#fafafa] border border-gray-200 font-medium text-black rounded-md shadow-sm dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white`}>
                            <i className={`ri-map-pin-4-line text-lg ${currentStep === 3 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        </span>
                        <span className={`ms-2 ${currentStep === 3 ? 'block' : 'lg:block hidden'} text-sm font-medium ${currentStep === 3 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('step3')}
                        </span>
                    </div>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-[#2b3c53]"></div>
                </li>
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`size-8 flex justify-center items-center shrink-0 bg-[#fafafa] border border-gray-200 font-medium text-black rounded-md shadow-sm dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white`}>
                            <i className={`ri-refund-2-line text-lg ${currentStep === 4 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        </span>
                        <span className={`ms-2 ${currentStep === 4 ? 'block' : 'lg:block hidden'} text-sm font-medium ${currentStep === 4 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('step4')}
                        </span>
                    </div>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-[#2b3c53]"></div>
                </li>
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`size-8 flex justify-center items-center shrink-0 bg-[#fafafa] border border-gray-200 font-medium text-black rounded-md shadow-sm dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white`}>
                            <i className={`ri-trophy-line text-lg ${currentStep === 5 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        </span>
                        <span className={`ms-2 ${currentStep === 5 ? 'block' : 'lg:block hidden'} text-sm font-medium ${currentStep === 5 ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('step5')}
                        </span>
                    </div>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-[#2b3c53]"></div>
                </li>
            </ul>
        </div>
    );
};