"use client"

import useToggleTimePeriod from '@/app/hooks/useToggleTimePeriod';
import AnalyticsDiagram from '@/app/ui/Statics/AnalyticsDiagram';
import AnalyticsHeading from '@/app/ui/Statics/AnalyticsHeading';
import ExpensesSummary from '@/app/ui/Statics/ExpensesSummary';
import IncomeSummary from '@/app/ui/Statics/IncomeSummary';
import React from 'react'

export default function DashboardMain() {
  const { selectedTimePeriod, handleTimePeriodChange } = useToggleTimePeriod();

  return (
    <div className='flex lg:flex-row justify-between gap-8 items-center flex-col w-full max-w-[1490px] mx-auto lg:px-0 px-4'>
      <div className='flex flex-col lg:w-2/3 w-full gap-16'>
        <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center w-full lg:gap-4 gap-8'>
          <IncomeSummary />
          <ExpensesSummary />
        </div>
        <div className='flex flex-col w-full gap-4'>
          <AnalyticsHeading onTimePeriodChange={handleTimePeriodChange} />
          <AnalyticsDiagram selectedTimePeriod={selectedTimePeriod} />
        </div>
      </div>
      <div className='flex flex-col lg:w-1/3 w-full'>
        {/* Other Content */}
      </div>
    </div>
  );
}
