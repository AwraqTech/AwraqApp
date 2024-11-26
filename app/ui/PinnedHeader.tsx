"use client"

import React from 'react'
import useShowingHeader from '../hooks/useShowingHeader'
import { useTheme } from '../context/ThemeContext';
import useScrollTo from '../hooks/useScrollTo';
import { useSidebar } from '../context/SidebarContext';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useToggleLanguage } from '../hooks/useToggleLanguage';

export default function PinnedHeader() {
    const { showHeader } = useShowingHeader();
    const { toggleTheme } = useTheme();
    const handleScroll = useScrollTo();
    const { toggleSidebar } = useSidebar();
    const t = useTranslations("HomePage");
    const { toggleLanguage } = useToggleLanguage();

    return (
        <header
            className={`flex flex-wrap lg:justify-start backdrop-blur-md dark:bg-[#071321]/80 bg-white/80 lg:flex-nowrap w-full text-sm py-3 z-50 fixed top-0 left-0 transform transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
            <nav className='max-w-6xl w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between'>
                <Link
                    className="lg:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
                    href="/"
                >
                    <img
                        src="/awraq-logo.svg"
                        className="h-10 object-contain dark:hidden"
                        alt="Logo"
                    />
                    <img
                        src="/dark-awraq-logo.svg"
                        className="h-10 object-contain hidden dark:block"
                        alt="Dark Logo"
                    />
                </Link>
                <div className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:grow-0 lg:basis-auto lg:block lg:order-2'>
                    <div className='flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:mt-0 lg:ps-5'>
                        <Link href="/terms" className='text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer'>
                            <h3>{t("terms")}</h3>
                        </Link>
                        <Link href="/privacy" className='text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer'>
                            <h3>{t("privacy")}</h3>
                        </Link>
                        <Link href="/contact-us" className='text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer'>
                            <h3>{t("contact-us")}</h3>
                        </Link>
                        <button onClick={handleScroll} className='text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer'>
                            <h3>{t("pricing")}</h3>
                        </button>
                    </div>
                </div>
                <div className="lg:order-3 flex items-center gap-x-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="hs-collapse-toggle relative size-11 flex justify-center items-center gap-x-2 rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
                        id="hs-navbar-alignment-collapse"
                        aria-expanded="false"
                        aria-controls="hs-navbar-alignment"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-navbar-alignment"
                    >
                        <i className='ri-sun-fill text-lg text-white hidden dark:flex' />
                        <i className='ri-moon-fill text-black text-lg flex dark:hidden' />
                    </button>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="lg:flex hidden hs-collapse-toggle relative size-11 justify-center items-center gap-x-2 rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
                        id="hs-navbar-alignment-collapse"
                        aria-expanded="false"
                        aria-controls="hs-navbar-alignment"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-navbar-alignment"
                    >
                        <i className='ri-global-fill text-lg text-black dark:text-white' />
                    </button>
                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="lg:hidden hs-collapse-toggle relative size-11 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:hover:bg-white/90 dark:focus:bg-white/90"
                        id="hs-navbar-alignment-collapse"
                        aria-expanded="false"
                        aria-controls="hs-navbar-alignment"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-navbar-alignment"
                    >
                        <i className='ri-menu-line text-black text-lg' />
                    </button>
                    <a href='https://app.awraq.tech' className="py-3 px-4 lg:inline-flex hidden items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]">
                        <h3>{t("go-header")}</h3>
                    </a>
                </div>
            </nav>
        </header>
    )
}