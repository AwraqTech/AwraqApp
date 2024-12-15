import InputCounter from '@/app/components/InputCounter';
import PlaneSelection from '@/app/components/PlaneSelection';
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function PlanSelectionStep({ }: Props) {
  const t = useTranslations('CompleteInformation');

  return (
    <div className='flex flex-col justify-center items-center w-full lg:gap-10 gap-5 text-center lg:px-10 lg:py-4 p-2'>
      <h1 className='lg:text-3xl text-2xl font-bold'>{t('plansHeaderTitle')}</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full lg:gap-x-24 lg:gap-y-8 gap-20 items-start">
        <div className='flex flex-col justify-center items-center gap-2'>
          <PlaneSelection title={t('freePlanName')} price={t('freePlanPrice')} duration={t('freePlanDuration')}/>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <PlaneSelection title={t('basicPlanName')} price={44.85} duration={t('basicPlanPrice')}/>
          <InputCounter title='زيادة عدد الفروع' price={21.85} />
          <InputCounter title='عدد أجهزة نقاط البيع' price={11.5} />
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <PlaneSelection title={t('professionalPlanName')} price={90.85} duration={t('professionalPlanPrice')}/>
          <InputCounter title='زيادة عدد الفروع' price={21.85} />
          <InputCounter title='عدد أجهزة نقاط البيع' price={11.5} />
        </div>
      </div>
    </div>
  )
}