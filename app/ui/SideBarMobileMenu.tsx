"use client";

import React from "react";
import useScrollTo from "../hooks/useScrollTo";
import { useSidebar } from "../context/SidebarContext";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useToggleLanguage } from "../hooks/useToggleLanguage";

export default function SideBarMobileMenu() {
    const t = useTranslations("HomePage");
    const { isOpen, closeSidebar } = useSidebar();
    const handleScroll = useScrollTo();
    const { toggleLanguage } = useToggleLanguage();

    const handleScrollAndClose = () => {
        handleScroll();
        closeSidebar();
    };

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
                className={`fixed top-0 left-0 bottom-0 z-[999] w-64 dark:bg-[#111c2a] bg-[#f1f1f1] border-e border-white dark:border-[#071321] pt-7 pb-10 overflow-y-auto 
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
                    <Link href="/terms" className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>{t("terms")}</h3>
                    </Link>
                    <Link href="/privacy" className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>{t("sidebar-privacy")}</h3>
                    </Link>
                    <Link href="/contact-us" className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>{t("sidebar-contact-us")}</h3>
                    </Link>
                    <button
                        onClick={handleScrollAndClose}
                        className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer"
                    >
                        <h3>{t("sidebar-pricing")}</h3>
                    </button>
                    <a
                        href='https://app.awraq.tech'
                        className="py-3 px-4 w-full justify-center flex items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]"
                    >
                        <h3>{t("sidebar-go-header")}</h3>
                    </a>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="py-3 px-4 w-full flex flex-row justify-center items-center dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861] gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-none"
                    >
                        <i className="ri-global-fill text-lg text-black dark:text-white" />
                        <h3>{t("sidebar-lang")}</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}
