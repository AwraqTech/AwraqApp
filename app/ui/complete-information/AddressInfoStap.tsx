import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function AddressInfoStap({}: Props) {
  const t = useTranslations('CompleteInformation');

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:px-10 lg:py-4 p-2 lg:gap-x-24 lg:gap-y-8 gap-4">
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('city')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('cityPlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-building-2-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
        {t('region')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('regionPlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-road-map-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
        {t('neighborhood')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('neighborhoodPlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-pushpin-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
        {t('street')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('streetPlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-guide-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
        {t('postalCode')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('postalCodePlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-navigation-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
    </div>
  )
}