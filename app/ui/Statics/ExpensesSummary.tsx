import useFetchingSmallChartData from '@/app/hooks/useFetchingSmallChartData';
import React from 'react'
import LineChartSmall from '../LineChartSmall';

export default function ExpensesSummary() {
    const chartData = useFetchingSmallChartData();
    return (
        <div className="flex flex-row justify-center items-center bg-[#fafafa] gap-6 border w-full shadow-sm rounded-xl px-6 pb-3 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            <LineChartSmall
                labels={chartData.labels}
                datasets={[
                    {
                        label: 'المصروفات الشهرية',
                        data: chartData.dataTwo,
                        borderColor: 'rgb(38, 234, 184)',
                        backgroundColor: 'rgba(38, 234, 184, 0.3)',
                        fill: true,
                    },
                ]}
            />
            <div className='flex flex-col gap-2 w-full mt-3 items-end justify-between'>
                <span className='flex flex-row justify-end items-center w-full gap-2'>
                    <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                        <i className='ri-token-swap-line text-lg text-black dark:text-white' />
                    </div>
                    <h1 className="font-bold text-md">المصروفات</h1>
                </span>
                <span className='flex flex-col justify-start items-end gap-1'>
                    <h1 className='text-2xl font-bold'>1746</h1>
                    <span className='flex flex-row gap-2 justify-end items-center'>
                        <h1 className="font-light text-xs">أقل بنسبة 28%</h1>
                        <i className='ri-swap-box-fill text-lg text-black dark:text-white' />
                    </span>
                </span>
            </div>
        </div>
    );
};