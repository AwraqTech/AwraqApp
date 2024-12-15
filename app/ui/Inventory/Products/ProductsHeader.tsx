"use client"

import { useModal } from '@/app/context/ModalContext';
import React from 'react'

export default function ProductsHeader() {
    const { openModal } = useModal();

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between items-center py-4'>
                <button onClick={() => openModal('createProduct')} className='flex flex-row justify-center items-center gap-2 px-3 py-2 rounded-lg bg-[#3784d1]'>
                    <h3 className='text-white'>إضافة منتج</h3>
                    <i className='ri-add-line text-white' />
                </button>
                <div className='flex flex-row justify-end items-center gap-2'>
                    <div className="relative hidden lg:flex" dir='ltr'>
                        <input
                            type="text"
                            id="hs-leading-icon"
                            name="hs-leading-icon"
                            className="py-3 px-4 ps-11 block w-full border-gray-300 bg-[#fafafa] shadow-sm rounded-lg text-sm border focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                            placeholder='إبحث عن منتج معين'
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <i className='ri-search-line text-lg text-neutral-400 dark:text-neutral-500' />
                        </div>
                    </div>
                    <button className='flex flex-row justify-center items-center gap-2 px-3 py-2'>
                        <h3>تصفية</h3>
                        <i className='ri-filter-line' />
                    </button>
                    <button className='flex flex-row justify-center items-center gap-2 px-3 py-2'>
                        <h3>خيارات</h3>
                        <i className='ri-equalizer-2-line' />
                    </button>
                </div>
            </div>
            <div className="relative flex lg:hidden" dir='ltr'>
                <input
                    type="text"
                    id="hs-leading-icon"
                    name="hs-leading-icon"
                    className="py-3 px-4 ps-11 block w-full border-gray-300 bg-[#fafafa] shadow-sm rounded-lg text-sm border focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                    placeholder='إبحث عن منتج معين'
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <i className='ri-search-line text-lg text-neutral-400 dark:text-neutral-500' />
                </div>
            </div>
        </div>
    )
}