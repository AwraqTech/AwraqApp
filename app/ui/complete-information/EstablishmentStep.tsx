import SubmittingButton from '@/app/components/SubmittingButton';
import useHndleEstablishment from '@/app/hooks/useHndleEstablishment';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function EstablishmentStep({ }: Props) {
  const t = useTranslations('CompleteInformation');
  const { documentType, isVat, handleToggleDocumentType, handleToggleVatRegi } = useHndleEstablishment();

  return (
    <div>
      <div className='flex flex-col justify-start items-start gap-2 w-full lg:px-10 px-4 mt-4'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('documentType')}
        </label>
      </div>
      <div className="grid grid-cols-2 w-full lg:px-10 lg:pb-10 p-2 lg:gap-x-24 lg:gap-y-8 gap-4">
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={documentType === 'FL'}
            onChange={() => handleToggleDocumentType('FL')}
          />
          <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('FL')}</span>
        </label>

        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={documentType === 'CR'}
            onChange={() => handleToggleDocumentType('CR')}
          />
          <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('CR')}</span>
        </label>
      </div>
      <div className="py-3 lg:px-10 px-4 lg:mb-8 mb-2 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white/60 dark:before:border-white/15 dark:after:border-white/15">{t('documentInfoTitle')}</div>
      <div className='grid lg:grid-cols-2 lg:mb-8 grid-cols-1 w-full lg:px-10 p-2 lg:gap-x-24 lg:gap-y-8 gap-4'>
        {documentType === 'FL' ? (
          <div className='flex flex-col justify-start items-start gap-2 w-full'>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
              {t('freelanceDocumentNumber')}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder='FL-000000000'
                className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <i className='ri-pass-valid-line text-lg text-neutral-400 dark:text-neutral-500' />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('commercialRegisterNumber')}
              </label>
              <div className='flex flex-row justify-start items-center gap-4 w-full'>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                    placeholder='2050123456'
                    maxLength={10}
                    pattern="\d*"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <i className='ri-building-4-line text-lg text-neutral-400 dark:text-neutral-500' />
                  </div>
                </div>
                <div>
                  <SubmittingButton isSubmitting={false} title={t('verifyCR')} />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('commercialRegisterName')}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  disabled={true}
                  value={"شركة محمد صلاح أحمد"}
                  className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <i className='ri-pass-valid-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('issueDate')}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  disabled={true}
                  value='07/06/2019'
                  className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <i className='ri-calendar-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('expiryDate')}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  disabled={true}
                  value='07/06/2019'
                  className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <i className='ri-calendar-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('activityType')}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  disabled={true}
                  value="البيع بالتجزئة للمنسوجات و الحياكة"
                  className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <i className='ri-briefcase-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-full'>
              <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
                {t('registerStatus')}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  disabled={true}
                  value="نشط"
                  className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <i className='ri-bar-chart-box-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="py-3 lg:px-10 px-4 lg:mb-8 mb-2 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white/60 dark:before:border-white/15 dark:after:border-white/15">{t('VatInformations')}</div>
      <div className='flex flex-col justify-start items-start gap-2 w-full lg:px-10 px-4'>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t('isVatRegistered')}
        </label>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:px-10 lg:pb-10 p-2 lg:gap-x-24 lg:gap-y-8 gap-4'>
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={isVat === true}
            onChange={() => handleToggleVatRegi(true)}
          />
          <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('yesVat')}</span>
        </label>
        <label
          className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#071321] dark:border-[#20344e] dark:text-neutral-400 cursor-pointer"
        >
          <input
            type="radio"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={isVat === false}
            onChange={() => handleToggleVatRegi(false)}
          />
          <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 text-justify">{t('noVat')}</span>
        </label>
        {isVat ? (
          <div className='flex flex-col justify-start items-start gap-2 w-full'>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
              {t('vatSubscriptionNumber')}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="310000000000000"
                className="py-3 px-4 ps-11 block w-full border border-gray-300 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <i className='ri-file-text-line text-lg text-neutral-400 dark:text-neutral-500' />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};