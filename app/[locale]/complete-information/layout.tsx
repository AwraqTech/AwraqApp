import NextAndBackButtons from '@/app/components/NextAndBackButtons';
import Stepper from '@/app/ui/complete-information/Stepper';
import Header from '@/app/ui/Header';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function CompleteInfoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations('CompleteInformation')
    return (
        <>
            <Header headerTitle={t('headerTitle')} />
            <div className='felx justify-center items-center sm:px-0 px-4 py-8'>
                <Stepper />
                <div className="flex flex-col bg-[#fafafa] mx-auto gap-6 border w-full max-w-7xl shadow-sm rounded-xl px-6 py-3 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 flex-grow my-4">
                    {children}
                </div>
                <NextAndBackButtons />
            </div>
        </>
    );
};