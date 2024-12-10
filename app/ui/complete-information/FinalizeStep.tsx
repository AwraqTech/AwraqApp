import CelebrationSuccess from '@/app/components/CelebrationSuccess'
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function FinalizeStep({}: Props) {
  const t = useTranslations('CompleteInformation');
  
  return (
    <CelebrationSuccess celebrationDescription={t('finalizeSubtitle')} celebrationTtile={t('finalizeTitle')} />
  )
}