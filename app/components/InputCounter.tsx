import React from 'react'
import usePlanSelection from '../hooks/usePlanSelection';

type Props = {
    title: string;
    price: number;
    counter: number;
}

export default function InputCounter({ title, price, counter }: Props) {
    const {
        handleBranchesCounter,
        handlePosDevicesCounter
    } = usePlanSelection();

    return (
        <div className="py-2 px-3 w-full bg-white border border-gray-200 rounded-lg dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400" data-hs-input-number="">
            <div className="w-full flex justify-between items-center gap-x-3">
                <div className='flex flex-col justify-start items-start'>
                    <span className="block font-medium text-sm text-gray-800 dark:text-white">
                        {title}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-neutral-400">
                        {`${price}ر.س | شهريا`}
                    </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400" aria-label="Decrease" onClick={() => {if (title === 'زيادة عدد الفروع') handleBranchesCounter(counter - 1); else handlePosDevicesCounter(counter - 1);}}>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white" type="number" aria-roledescription="Number field" value={counter} data-hs-input-number-input="" />
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400" aria-label="Increase" onClick={() => {if (title === 'زيادة عدد الفروع') handleBranchesCounter(counter + 1); else handlePosDevicesCounter(counter + 1);}}>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}