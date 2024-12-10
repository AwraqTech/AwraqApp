import React from 'react'

type Props = {}

export default function ExportButton({ }: Props) {
    return (
        <button className='lg:flex hidden flex-row gap-2 justify-center items-center py-[3px] px-3 text-sm font-semibold rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]'>
            <h1>تصدير</h1>
            <i className={`ri-upload-2-line text-lg text-black dark:text-white`} />
        </button>
    )
}