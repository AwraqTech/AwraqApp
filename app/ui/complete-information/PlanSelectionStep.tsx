import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function PlanSelectionStep({ }: Props) {
  const t = useTranslations('CompleteInformation');

  return (
    <div className='flex flex-col justify-center items-center w-full lg:gap-10 gap-5 text-center lg:px-10 lg:py-4 p-2'>
      <h1 className='lg:text-3xl text-2xl font-bold'>{t('plansHeaderTitle')}</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full lg:gap-x-24 lg:gap-y-8 gap-4">
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <span className="text-lg font-medium text-black ms-3 dark:text-white text-justify">{t('freePlanName')}</span>
            <span className='flex flex-row justify-start items-center gap-2 text-black dark:text-white'>
              <h1 className='text-3xl lg:text-4xl font-bold'>{t('freePlanPrice')}</h1>
              <div className='flex flex-col justify-start items-start w-full'>
                <p className='text-gray-600 dark:text-white/60'>{t('freePlanDuration')}</p>
                <p className='text-gray-600 dark:text-white/60'>{t('limitedTime')}</p>
              </div>
            </span>
          </div>
        </label>
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <span className="text-lg font-medium text-black ms-3 dark:text-white text-justify">{t('basicPlanName')}</span>
            <span className='flex flex-row justify-start items-center gap-2 text-black dark:text-white'>
              <h1 className='text-3xl lg:text-4xl font-bold'>44.85</h1>
              <div className='flex flex-col justify-start items-start w-full'>
                <p className='text-gray-600 dark:text-white/60'>{t('basicPlanPrice')}</p>
                <p className='text-gray-600 dark:text-white/60'>{t('basicPlanTaxIncluded')}</p>
              </div>
            </span>
          </div>
        </label>
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <span className="text-lg font-medium text-black ms-3 dark:text-white text-justify">{t('professionalPlanName')}</span>
            <span className='flex flex-row justify-start items-center gap-2 text-black dark:text-white'>
              <h1 className='text-3xl lg:text-4xl font-bold'>90.85</h1>
              <div className='flex flex-col justify-start items-start w-full'>
                <p className='text-gray-600 dark:text-white/60'>{t('professionalPlanPrice')}</p>
                <p className='text-gray-600 dark:text-white/60'>{t('professionalPlanTaxIncluded')}</p>
              </div>
            </span>
          </div>
        </label>
      </div>
    </div>
  )
}