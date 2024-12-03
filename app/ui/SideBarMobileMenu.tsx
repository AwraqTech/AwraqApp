"use client";

import React from "react";
import { useSidebar } from "../context/SidebarContext";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useToggleLanguage } from "../hooks/useToggleLanguage";
import MainNavSection from "./MainNavSection";
import FinancialSection from "./FinancialSection";
import SettingSection from "./SettingSection";
import useSidebarLogic from "../hooks/useSidebarCollapse";

export default function SideBarMobileMenu() {
    const t = useTranslations("HomePage");
    const t1 = useTranslations("SideBarNav")
    const { isOpen, closeSidebar } = useSidebar();
    const { toggleLanguage } = useToggleLanguage();
    const { isArabic, openMenus, handleToggle, isActive } = useSidebarLogic();

    return (
        <div>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 lg:hidden"
                    onClick={closeSidebar}
                    id="backdrop"
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 bottom-0 z-[999] w-80 dark:bg-[#071321] bg-white border-e border-[#f1f1f1] dark:border-[#111c2a] pt-7 pb-10 overflow-y-auto 
        transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
                aria-label="Sidebar"
            >
                <div className="px-6">
                    <Link
                        className="lg:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
                        href="#"
                    >
                        <Image
                            src="/awraq-logo.svg"
                            className="h-10 object-contain dark:hidden"
                            alt="Logo"
                            width={1080}
                            height={1080}
                        />
                        <Image
                            src="/dark-awraq-logo.svg"
                            className="h-10 object-contain hidden dark:block"
                            alt="Dark Logo"
                            width={1080}
                            height={1080}
                        />
                    </Link>
                </div>
                {/* Sidebar content */}
                <div className="flex flex-col justify-center items-start mt-10 space-y-4 px-6">
                    <div className="flex flex-col justify-start items-start gap-8 w-full h-full mb-10">
                        <MainNavSection
                            isArabic={isArabic}
                            openMenus={openMenus}
                            handleToggle={handleToggle}
                            isActive={isActive}
                        />
                        <FinancialSection
                            isArabic={isArabic}
                            openMenus={openMenus}
                            handleToggle={handleToggle}
                            isActive={isActive}
                        />
                        <SettingSection
                            isArabic={isArabic}
                            openMenus={openMenus}
                            handleToggle={handleToggle}
                            isActive={isActive}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <button className="flex flex-row w-full justify-between items-center py-2 px-4 dark:bg-[#19293d] bg-[#f3f3f3] rounded-xl">
                            <div className="flex flex-row justify-start items-start w-full gap-2">
                                <img
                                    src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
                                    className="h-10 rounded-full object-contain"
                                    alt="User Profile"
                                />
                                <span className="flex flex-col justify-start items-start text-sm">
                                    <h1 className="font-medium">نواف القحطاني</h1>
                                    <p className="text-gray-500 dark:text-gray-400">{t1("accountManager")}</p>
                                </span>
                            </div>
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-full border border-red-100 bg-red-200 dark:border-red-900 dark:bg-red-800 rounded-xl py-2 px-4">
                            <h1 className="font-medium text-red-800 dark:text-red-300">{t1("signOut")}</h1>
                            <i className="ri-logout-circle-line text-red-800 dark:text-red-300" />
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="py-3 px-4 w-full flex flex-row justify-center items-center dark:border-[#364861] border-gray-300 bg-[#f1f1f1] hover:bg-gray-100 dark:bg-[#111c2a] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861] gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-none"
                    >
                        <i className="ri-global-fill text-lg text-black dark:text-white" />
                        <h3>{t("sidebar-lang")}</h3>
                    </button>
                    <span className="flex flex-row justify-center items-center gap-2 text-[#43A2FE] cursor-pointer">
                        <a href="https://x.com/awraqit">
                            <i className="ri-twitter-x-line text-xl hover:text-[#3784d1]" />
                        </a>
                        <a href="https://instagram.com">
                            <i className="ri-instagram-line text-xl hover:text-[#3784d1]" />
                        </a>
                        <a href="https://facebook.com">
                            <i className="ri-facebook-box-line text-xl hover:text-[#3784d1]" />
                        </a>
                        <a href="https://linkedin.com">
                            <i className="ri-linkedin-box-line text-xl hover:text-[#3784d1]" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
