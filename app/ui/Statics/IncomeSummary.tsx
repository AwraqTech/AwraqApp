import React from 'react'
import LineChartSmall from '../LineChartSmall';
import useFetchingSmallChartData from '@/app/hooks/useFetchingSmallChartData';

export default function IncomeSummary() {
    const chartData = useFetchingSmallChartData();
    return (
        <div className="flex flex-row justify-center items-center bg-[#fafafa] gap-6 border w-full shadow-sm rounded-xl px-6 pb-3 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            <LineChartSmall
                labels={chartData.labels}
                datasets={[
                    {
                        label: 'الإيرادات الشهرية',
                        data: chartData.dataOne,
                        borderColor: 'rgb(67, 162, 254)',
                        backgroundColor: 'rgba(67, 162, 254, 0.1)',
                        fill: true,
                    },
                ]}
            />
            <div className='flex flex-col gap-2 w-full mt-3 items-end justify-between'>
                <span className='flex flex-row justify-end items-center w-full gap-2'>
                    <h1 className="font-bold text-md">الإيرادات</h1>
                    <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                        <i className='ri-copper-coin-line text-lg text-black dark:text-white' />
                    </div>
                </span>
                <span className='flex flex-col justify-start items-end gap-1'>
                    <h1 className='text-2xl font-bold'>5406</h1>
                    <span className='flex flex-row gap-2 justify-end items-center'>
                        <h1 className="font-light text-xs">زيادة بنسبة 13%</h1>
                        <i className='ri-swap-box-fill text-lg text-black dark:text-white'/>
                    </span>
                </span>
            </div>
        </div>
    );
};