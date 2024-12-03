"use client";

import React from "react";
import Legend from "./Legend";
import BarChartDesktop from "../BarChartDesktop";
import BarChartMoblie from "../BarChartMoblie";
import useFetchingBigChartData from "@/app/hooks/useFetchingBigChartData";

interface Props {
    selectedTimePeriod: string;
}

const AnalyticsDiagram = ({ selectedTimePeriod }: Props) => {
    const chartData = useFetchingBigChartData(selectedTimePeriod);

    return (
        <div className="flex flex-col bg-[#fafafa] border shadow-sm rounded-xl px-6 pt-4 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            {/* Desktop Chart */}
            <div className="lg:flex hidden">
                <BarChartDesktop
                    labels={chartData.labels}
                    datasets={[
                        {
                            label: 'الإيرادات الشهرية',
                            data: chartData.dataOne,
                            borderColor: 'rgb(67, 162, 254)',
                            backgroundColor: 'rgba(67, 162, 254)',
                            fill: true,
                        },
                        {
                            label: 'المصروفات الشهرية',
                            data: chartData.dataTwo,
                            borderColor: 'rgb(38, 234, 184)',
                            backgroundColor: 'rgba(38, 234, 184)',
                            fill: true,
                        },
                    ]}
                    selectedTimePeriod={selectedTimePeriod}
                />
            </div>
            {/* Mobile Chart */}
            <div className="lg:hidden flex">
                <BarChartMoblie
                    labels={chartData.labels}
                    datasets={[
                        {
                            label: 'الإيرادات الشهرية',
                            data: chartData.dataOne,
                            borderColor: 'rgb(67, 162, 254)',
                            backgroundColor: 'rgba(67, 162, 254)',
                            fill: true,
                        },
                        {
                            label: 'المصروفات الشهرية',
                            data: chartData.dataTwo,
                            borderColor: 'rgb(38, 234, 184)',
                            backgroundColor: 'rgba(38, 234, 184)',
                            fill: true,
                        },
                    ]}
                    selectedTimePeriod={selectedTimePeriod}
                />
            </div>
            <Legend legendTitleOne="الإيرادات" legendTitleTwo="المصروفات" />
        </div>
    );
};



export default AnalyticsDiagram;
