import { useTranslations } from 'next-intl';
import useHandleIdintityUser from '@/app/hooks/useHandleIdentityUser';
import React from 'react'

export default function PersonalInfoStep() {
  const t = useTranslations('CompleteInformation');
  const {
    ownerName,
    ownerNameChange,
    ownerBirthDate,
    ownerBirthDateChange,
    onwerPhoneNo,
    onwerPhoneNoChange,
    ownerEmail,
    ownerEmailChange,
    onwerIdNumber,
    onwerIdNumberChange,
    onwerIdType,
    handleNationalType
  } = useHandleIdintityUser();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:px-10 lg:py-4 p-2 lg:gap-x-24 lg:gap-y-8 gap-4">
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('fullName')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            value={ownerName}
            onChange={(e) => ownerNameChange(e.target.value)}
            placeholder={t('fullNamePlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-pass-valid-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('dob')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            value={ownerBirthDate}
            onChange={(e) => ownerBirthDateChange(e.target.value)}
            placeholder={t('dobPlaceholder')}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-calendar-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('idType')}
        </label>
        <div className="grid grid-cols-2 gap-6 w-full">
          <label
            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
          >
            <input
              type="radio"
              checked={onwerIdType === 'National ID'}
              onChange={() => handleNationalType('National ID')}
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('nationalId')}</span>
          </label>
          <label
            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
          >
            <input
              type="radio"
              checked={onwerIdType === 'Residence ID'}
              onChange={() => handleNationalType('Residence ID')}
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('residentId')}</span>
          </label>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('idNumber')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder='1012345678'
            value={onwerIdNumber}
            onChange={(e) => onwerIdNumberChange(e.target.value)}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-pass-valid-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('contactNumber')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder='0512345678'
            value={onwerPhoneNo}
            onChange={(e) => onwerPhoneNoChange(e.target.value)}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-phone-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('email')}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder='you@site.com'
            value={ownerEmail}
            onChange={(e) => ownerEmailChange(e.target.value)}
            className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-mail-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
    </div>
  )
}