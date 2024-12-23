import InventoryAnalyticsSection from '@/app/ui/Inventory/general/InventoryAnalyticsSection'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex flex-col w-full max-w-[1490px] mx-auto gap-4 lg:px-0 px-4 py-4 lg:py-8'>
      <InventoryAnalyticsSection />
    </div>
  )
}