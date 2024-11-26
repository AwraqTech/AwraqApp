import { Link } from '@/navigation'
import React from 'react'

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center dark:bg-[#071321] bg-[#fff]">
            <div className='flex flex-col justify-center items-center rounded-3xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] lg:p-36 p-8 mx-4 lg:mx-0'>
                <h1 className="lg:text-[250px] text-[150px] font-bold text-center leading-[200px]">404</h1>
                <p className="text-lg text-gray-700 dark:text-gray-400 mt-4">
                    عذرا، الصفحة التي تبحث عنها غير موجودة
                </p>
                <Link
                    href="/"
                    className="mt-6 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]"
                >
                    العودة للرئيسية
                </Link>
            </div>
        </div>
    )
}