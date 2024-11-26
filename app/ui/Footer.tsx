import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

function Footer() {
    const t = useTranslations("HomePage");

    return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-6 w-full mx-auto lg:px-8 px-4 py-4">
            <span className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-2xl font-bold'>{t("footer-title")}</h1>
                <p className='text-gray-500 dark:text-gray-400 lg:text-right'>
                    {t("footer-description")}
                </p>
            </span>
            <p className='text-gray-500 dark:text-gray-400'>
                {t("footer-copyright")}
            </p>
        </div>
    )
}

export default Footer