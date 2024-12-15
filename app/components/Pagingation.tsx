"use client"

import React from 'react'
import useSidebarLogic from '../hooks/useSidebarCollapse'

type Props = {}

export default function Pagingation({ }: Props) {
    const { isArabic } = useSidebarLogic();

    return (
        <nav className="flex justify-center items-center -space-x-px" aria-label="Pagination">
            <button
                type="button"
                className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Previous"
            >
                <i className={`ri-arrow-${!isArabic ? 'right' : 'left'}-s-line`} />
                <span className="sr-only">Previous</span>
            </button>
            <button
                type="button"
                className="min-h-[32px] min-w-12 flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-2.5 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:focus:bg-neutral-500"
                aria-current="page"
            >
                1
            </button>
            <button
                type="button"
                className="min-h-[32px] min-w-12 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-2.5 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
                2
            </button>
            <button
                type="button"
                className="min-h-[32px] min-w-12 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-2.5 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
                3
            </button>
            <div className="hs-tooltip inline-block border border-gray-200 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                <button
                    type="button"
                    className="hs-tooltip-toggle group min-h-[30px] min-w-12 flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                >
                    <span className="text-[10px] group-hover:hidden">•••</span>
                    <i className={`ri-arrow-${!isArabic ? 'left' : 'right'}-double-line group-hover:block hidden shrink-0`} />
                    <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity absolute invisible z-10 py-2 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700 hidden"
                        role="tooltip"
                    >
                        Next 4 pages
                    </span>
                </button>
            </div>
            <button
                type="button"
                className="min-h-[32px] min-w-12 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-2.5 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
                8
            </button>
            <button
                type="button"
                className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Next"
            >
                <span className="sr-only">Next</span>
                <i className={`ri-arrow-${!isArabic ? 'left' : 'right'}-s-line`} />
            </button>
        </nav>

    )
}