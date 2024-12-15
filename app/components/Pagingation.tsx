"use client"

import React from 'react'
import useSidebarLogic from '../hooks/useSidebarCollapse'
import { usePagination } from '../context/PaginationContext';

export default function Pagingation() {
    const { isArabic } = useSidebarLogic();
    const { currentPage, totalPages, setCurrentPage, visiblePages, handleDotClick } = usePagination();

    return (
        <nav className={`${totalPages === 0 ? 'hidden' : 'flex'} justify-center items-center -space-x-px`} aria-label="Pagination">
            <button
                type="button"
                className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10"
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <i className={`ri-arrow-${!isArabic ? 'right' : 'left'}-s-line`} />
            </button>
            {visiblePages[0] > 1 && (
                <>
                    <button
                        type="button"
                        onClick={() => handleDotClick('prev')}
                        className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10"
                    >
                        <i className='ri-arrow-right-double-fill' />
                    </button>
                </>
            )}
            {visiblePages.map((index) => (
                <button
                    key={index}
                    type="button"
                    aria-current="page"
                    onClick={() => setCurrentPage(index + 1)}
                    className={`${currentPage === index + 1 ? "bg-gray-200 dark:bg-[#2b3c53]" : "bg-white dark:bg-[#111c2a]"} min-h-[32px] min-w-12 flex justify-center items-center text-gray-800 border border-gray-200 py-2 px-2.5 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:hover:bg-white/10 dark:text-white`}
                >
                    {index + 1}
                </button>
            ))}
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                <>
                    <button
                        type="button"
                        onClick={() => handleDotClick('next')}
                        className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10"
                    >
                        <i className='ri-arrow-left-double-line' />
                    </button>
                </>
            )}
            <button
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="min-h-[32px] min-w-12 py-2 px-2 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70 dark:text-white dark:hover:bg-white/10"
                aria-label="Next"
            >
                <i className={`ri-arrow-${!isArabic ? 'left' : 'right'}-s-line`} />
            </button>
        </nav>
    );
};
