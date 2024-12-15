import React from 'react'

export default function PlanSubscriptionExpired() {
    return (
        <div
            className="bg-yellow-50 flex flex-row border w-full max-w-[1490px] mx-auto items-center justify-between border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
            role="alert"
            aria-labelledby="hs-with-description-label"
        >
            <div className="flex lg:w-auto w-2/3">
                <div className="shrink-0">
                    <i className='ri-alert-line text-black dark:text-white' />
                </div>
                <div className="ms-4">
                    <h3 id="hs-with-description-label" className="text-sm font-semibold">
                        إنتهت مدة إشتراكك في باقاتنا
                    </h3>
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 lg:flex hidden">
                        باقتك الآن معلقة و لا يمكنك إستخدام خدماتنا حتى يتم دفع رسوم الإشتراك لأحد الباقات الخاصة بنا
                    </div>
                </div>
            </div>
            <button className='flex flex-row lg:w-auto w-1/3 justify-center items-center gap-2 px-3 py-2 rounded-md bg-yellow-800 dark:bg-yellow-900'>
                <p className='text-white font-medium'>تجديد الإشتراك</p>
            </button>
        </div>
    )
}