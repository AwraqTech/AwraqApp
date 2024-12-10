"use client"

import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useSidebar } from '../context/SidebarContext';
import { Link } from '@/navigation';
import { useToggleLanguage } from '../hooks/useToggleLanguage';
import { usePathname } from '@/navigation';
import useSidebarLogic from '../hooks/useSidebarCollapse';

interface Props {
  headerTitle: string;
}

export default function Header({headerTitle}: Props) {
  const { toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { toggleLanguage } = useToggleLanguage();
  const pathname = usePathname();
  const { isArabic } = useSidebarLogic();

  const auth = pathname.includes('/auth');
  const completeInformation = pathname.includes('/complete-information')
  const dashboard = pathname.includes('/dashboard');

  return (
    <header className={`flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-transparent text-sm ${dashboard ? "lg:py-2 py-4" : "lg:py-8 py-4"} `}>
      <nav className='w-full mx-auto sm:px-8 px-4 flex flex-wrap basis-full items-center justify-between'>
        {auth ? (
          <Link
          className={`lg:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80`}
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
        ) : (
          <h1 className={`text-3xl font-bold ${!isArabic ? 'border-r-[6px] border-r-[#43A2FE] pr-2' : 'border-l-[6px] border-l-[#43A2FE] pl-2'}`}>{headerTitle}</h1>
        )}
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
            className={`hs-collapse-toggle lg:flex ${auth || completeInformation ? 'flex' : 'hidden'} relative size-11 justify-center items-center gap-x-2 rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]`}
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <i className='ri-global-fill text-lg text-black dark:text-white' />
          </button>
          {/* Mobile Menu Button */}
          {auth || completeInformation ? null : (
            <button
              type="button"
              onClick={toggleSidebar}
              className={`lg:hidden hs-collapse-toggle relative size-11 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:hover:bg-white/90 dark:focus:bg-white/90`}
              id="hs-navbar-alignment-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-alignment"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-alignment"
            >
              <i className='ri-menu-line text-black text-lg' />
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
