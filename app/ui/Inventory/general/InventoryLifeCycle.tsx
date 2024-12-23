"use client"

import GageBar from '@/app/components/GageBar';
import { useTooltip } from '@/app/hooks/useTooltip';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function InventoryLifeCycle() {
  const { tooltipVisible, onMouseEnter, onMouseLeave } = useTooltip();
  const t = useTranslations("SideBarNav");

  return (
    <div className="flex flex-col bg-[#fafafa] gap-6 border w-full shadow-sm rounded-xl px-6 pb-6 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
      <div className='flex flex-row gap-2 w-full mt-3 items-end justify-between'>
        <span className='flex flex-row justify-start items-center w-full gap-2'>
          <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
            <i className='ri-history-line text-lg text-black dark:text-white' />
          </div>
          <h1 className="font-bold text-md">دورة حياة المخزون</h1>
        </span>
        <div className="hs-tooltip inline-block">
          <button
            type="button"
            className="hs-tooltip-toggle inline-flex justify-center items-center gap-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <i className="ri-information-2-line text-lg text-neutral-400 dark:text-neutral-400" />
            <span
              className={`hs-tooltip-content absolute w-full max-w-48 z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-[#2b3c53] ${tooltipVisible ? "opacity-100 visible" : "opacity-0 invisible"
                } transition-opacity`}
              role="tooltip"
            >
              في هذا الحقل ستتمكن من مراقبة دورة حياة المخزون "مدة بقاء المخزون في المستودع" لدى متجرك
            </span>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <GageBar score={3} duration={'أيام'} title='قهوة مختصة V60' />
        <GageBar score={3} duration={'أيام'} title='قهوة مختصة V60' />
        <GageBar score={3} duration={'أيام'} title='قهوة مختصة V60' />
        <GageBar score={3} duration={'أيام'} title='قهوة مختصة V60' />
      </div>
    </div>
  );
};