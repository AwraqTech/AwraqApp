import useFetchingSmallChartData from '@/app/hooks/useFetchingSmallChartData';
import React from 'react'
import LineChartSmall from '../LineChartSmall';

export default function ReturnsSummary() {
    const chartData = useFetchingSmallChartData();
    return (
        <div className="flex flex-row justify-center items-center bg-[#fafafa] gap-6 border w-full shadow-sm rounded-xl px-6 pb-3 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            <LineChartSmall
                labels={chartData.labels}
                datasets={[
                    {
                        label: 'الإيرادات الشهرية',
                        data: chartData.dataOne,
                        borderColor: 'rgb(38, 234, 184)',
                        backgroundColor: 'rgba(38, 234, 184, 0.3)',
                        fill: true,
                    },
                ]}
            />
            <div className='flex flex-col gap-2 w-full mt-3 items-end justify-between'>
                <span className='flex flex-row justify-end items-center w-full gap-2'>
                    <h1 className="font-bold text-md">المرتجعات</h1>
                    <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                        <i className='ri-swap-3-line text-lg text-black dark:text-white' />
                    </div>
                </span>
                <span className='flex flex-col justify-start items-end gap-1'>
                    <h1 className='text-2xl font-bold'>22</h1>
                    <span className='flex flex-row gap-2 justify-end items-center'>
                        <h1 className="font-light text-xs">زيادة بنسبة</h1>
                        <div>
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                                    <polyline points="16 17 22 17 22 11"></polyline>
                                </svg>
                                74.4%
                            </span>
                        </div>
                    </span>
                </span>
            </div>
        </div>
    );
}