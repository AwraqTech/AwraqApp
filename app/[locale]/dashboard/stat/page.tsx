"use client"

import useToggleTimePeriod from '@/app/hooks/useToggleTimePeriod';
import FirstLaunchPageGuid from '@/app/ui/FirstLaunchPageGuid';
import AnalyticsDiagram from '@/app/ui/Statics/AnalyticsDiagram';
import AnalyticsHeading from '@/app/ui/Statics/AnalyticsHeading';
import EventsList from '@/app/ui/Statics/EventsList';
import ExpensesSummary from '@/app/ui/Statics/ExpensesSummary';
import IncomeSummary from '@/app/ui/Statics/IncomeSummary';
import LastNotifications from '@/app/ui/Statics/LastNotifications';
import OrdersSummary from '@/app/ui/Statics/OrdersSummary';
import ReturnsSummary from '@/app/ui/Statics/ReturnsSummary';
import React from 'react'

export default function DashboardMain() {
  const { selectedTimePeriod, handleTimePeriodChange } = useToggleTimePeriod();

  return (
    <>
      {/* <FirstLaunchPageGuid /> */}
      <div className='flex lg:flex-row justify-between gap-8 mt-4 items-start flex-col w-full max-w-[1490px] mx-auto lg:px-0 px-4'>
        <div className='flex flex-col lg:w-2/3 w-full gap-8'>
          <div className='flex flex-col w-full gap-4'>
            <AnalyticsHeading onTimePeriodChange={handleTimePeriodChange} />
            <AnalyticsDiagram selectedTimePeriod={selectedTimePeriod} />
          </div>
          <div className='flex flex-col w-full gap-4'>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center w-full gap-4'>
              <IncomeSummary />
              <ExpensesSummary />
            </div>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center w-full gap-4'>
              <OrdersSummary />
              <ReturnsSummary />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/3 w-full gap-8'>
          <LastNotifications />
          <EventsList />
        </div>
      </div>
    </>
  );
}
