import { useTooltip } from '@/app/hooks/useTooltip';
import React from 'react'
import EventsListSection from './EventsListSection';

export default function EventsList() {
    const { tooltipVisible, onMouseEnter, onMouseLeave } = useTooltip();

    return (
        <div className="flex flex-col justify-center items-center bg-[#fafafa] gap-6 border w-full shadow-sm rounded-xl px-6 py-3 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            <div className='flex flex-row justify-between items-center w-full'>
                <span className="flex flex-row justify-start items-center gap-2 w-full">
                    <h1 className="font-bold text-md">سجل العمليات</h1>
                    <div className="hs-tooltip inline-block">
                        <button
                            type="button"
                            className="hs-tooltip-toggle inline-flex justify-center items-center gap-2"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <i className="ri-information-2-line text-lg text-neutral-400 dark:text-neutral-400" />
                            <span
                                className={`hs-tooltip-content absolute max-w-40 z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-[#2b3c53] ${tooltipVisible ? "opacity-100 visible" : "opacity-0 invisible"
                                    } transition-opacity`}
                                role="tooltip"
                            >
                                من خلال سجل العمليات سيمكنك الإطلاع بشكل مختصر و سريع على أحدث العمليات المجتازة
                            </span>
                        </button>
                    </div>
                </span>
                <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                    <i className='ri-apps-2-add-line text-lg text-black dark:text-white' />
                </div>
            </div>
            <EventsListSection />
        </div>
    )
}