import { useTranslations } from 'next-intl';
import React from 'react'
import usePlanSelection from '../hooks/usePlanSelection';

type Props = {
    title: string;
    price: string;
    duration: string;
}

export default function PlaneSelection({ title, price, duration }: Props) {
    const t = useTranslations('CompleteInformation');
    const { handlePlanSelection } = usePlanSelection();

    return (
        <label
            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
            <input
                type="radio"
                onChange={() => handlePlanSelection(title, price, duration)}
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                <span className="text-lg font-medium text-black ms-3 dark:text-white text-justify">{title}</span>
                <span className='flex flex-row justify-start items-center gap-2 text-black dark:text-white'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>{price}</h1>
                    <div className='flex flex-col justify-start items-start w-full'>
                        <p className='text-gray-600 dark:text-white/60'>{duration}</p>
                    </div>
                </span>
            </div>
        </label>
    )
}