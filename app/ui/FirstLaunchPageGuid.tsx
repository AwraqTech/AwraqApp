import React from 'react'
import useFirstLaunchGuid from '../hooks/useFirstLaunchGuid'

export default function FirstLaunchPageGuid() {
    const {
        currentStep,
        isGuidVisible,
        handleCloseGuid,
        handleNextStep
    } = useFirstLaunchGuid();

    return (
        <>
            {isGuidVisible && (
                <div className='lg:flex hidden'>
                    {currentStep === 1 && (
                        <>
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:flex hidden right-64"
                                id="backdrop">
                            </div>
                            <div
                                className="fixed inset-0 opacity-0 z-[100] transition-opacity duration-300 lg:flex hidden right-0 top-0 w-64"
                                id="backdrop">
                            </div>
                            <div className='fixed top-56 righ-64 z-[999] pt-7 pb-10 overflow-y-auto '>
                                <div className="flex flex-col justify-center items-center bg-[#fafafa] gap-6 border w-full max-w-64 shadow-xl dark:shadow-md rounded-xl p-6 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                                    <span className='flex flex-row justify-between items-center w-full gap-2'>
                                        <h1 className="font-bold text-md">القائمة الجانبية</h1>
                                        <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                                            <i className='ri-number-1 text-sm text-black dark:text-white' />
                                        </div>
                                    </span>
                                    <h1 className="font-light text-justify">
                                        ستتمكن من خلال القائمة الجانبية بالتوجه إلى جميع الصفحات الموجودة لتسهل عملية التنقل بين الصفحات
                                    </h1>
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <button onClick={handleNextStep} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]'>
                                            <h1 className="font-bold text-md text-white">التالي</h1>
                                        </button>
                                        <button onClick={handleCloseGuid} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 border text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53]'>
                                            <h1 className="font-bold text-md">تخطي</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:flex hidden right-0 bottom-[93%]"
                                id="backdrop">
                            </div>
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:flex hidden right-0 w-64 top-[7%]"
                                id="backdrop">
                            </div>
                            <div
                                className="fixed inset-0 opacity-0 z-[100] transition-opacity duration-300 lg:flex hidden right-64 top-0"
                                id="backdrop">
                            </div>
                            <div className='fixed top-56 righ-64 z-[999] pt-7 pb-10 overflow-y-auto '>
                                <div className="flex flex-col justify-center items-center bg-[#fafafa] gap-6 border w-full max-w-64 shadow-xl dark:shadow-md rounded-xl p-6 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                                    <span className='flex flex-row justify-between items-center w-full gap-2'>
                                        <h1 className="font-bold text-md">القائمة الجانبية</h1>
                                        <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                                            <i className='ri-number-2 text-sm text-black dark:text-white' />
                                        </div>
                                    </span>
                                    <h1 className="font-light text-justify">
                                        ستتمكن من خلال القائمة الجانبية بالتوجه إلى جميع الصفحات الموجودة لتسهل عملية التنقل بين الصفحات
                                    </h1>
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <button onClick={handleNextStep} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]'>
                                            <h1 className="font-bold text-md text-white">التالي</h1>
                                        </button>
                                        <button onClick={handleCloseGuid} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 border text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53]'>
                                            <h1 className="font-bold text-md">تخطي</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:flex hidden right-0 top-[7%]"
                                id="backdrop">
                            </div>
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:flex hidden left-56 bottom-[93%]"
                                id="backdrop">
                            </div>
                            <div
                                className="fixed inset-0 opacity-0 z-[100] transition-opacity duration-300 lg:flex hidden right-64 top-0"
                                id="backdrop">
                            </div>
                            <div className='fixed top-24 left-64 z-[999] pt-7 pb-10 overflow-y-auto '>
                                <div className="flex flex-col justify-center items-center bg-[#fafafa] gap-6 border w-full max-w-64 shadow-xl dark:shadow-md rounded-xl p-6 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                                    <span className='flex flex-row justify-between items-center w-full gap-2'>
                                        <h1 className="font-bold text-md">القائمة الجانبية</h1>
                                        <div className='rounded-lg py-0.5 px-1.5 border dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53] items-center justify-center'>
                                            <i className='ri-number-3 text-sm text-black dark:text-white' />
                                        </div>
                                    </span>
                                    <h1 className="font-light text-justify">
                                        ستتمكن من خلال القائمة الجانبية بالتوجه إلى جميع الصفحات الموجودة لتسهل عملية التنقل بين الصفحات
                                    </h1>
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <button onClick={handleNextStep} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]'>
                                            <h1 className="font-bold text-md text-white">التالي</h1>
                                        </button>
                                        <button onClick={handleCloseGuid} className='py-3 px-4 sm:inline-flex hidden items-center gap-x-2 border text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none dark:border-[#364861] border-gray-300 bg-white dark:bg-[#2b3c53]'>
                                            <h1 className="font-bold text-md">تخطي</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}