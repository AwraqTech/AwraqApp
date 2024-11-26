import React from 'react'
import SubmittingButton from '../components/SubmittingButton'

export default function LoginForm() {
  return (
    <form className='flex flex-col gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 w-full max-w-xl rounded-xl'>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          البريد الإلكتروني
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="text"
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder="you@site.com"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-mail-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          كلمة المرور
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="password"
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder="********"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-lock-password-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <SubmittingButton isSubmitting={false} title='تسجيل الدخول' />
      <div className="py-3 flex items-center text-xs text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">إستعادة المعلومات</div>
    </form>
  )
}