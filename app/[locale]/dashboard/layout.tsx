"use client"

import useDynamicPathState from "@/app/hooks/useDynamicPathState";
import { useTooltip } from "@/app/hooks/useTooltip";
import DashboardSideBarNavLg from "@/app/ui/DashboardSideBarNavLg";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import SideBarMobileMenu from "@/app/ui/SideBarMobileMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import Intercom from '@intercom/messenger-js-sdk';
import { usePathname } from "next/navigation";
import PlanSubscriptionExpired from "@/app/components/PlanSubscriptionExpired";
import MaintenanceNotification from "@/app/components/MaintenanceNotification";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pageTitle = useDynamicPathState();
    const t = useTranslations("SideBarNav");
    const { tooltipVisible, onMouseEnter, onMouseLeave } = useTooltip();
    const pathname = usePathname();
    const isArabic = pathname.includes('/ar') ? 'left' : 'right';
    const language = pathname.includes('/ar') ? 'ar' : 'en';

    // for proposal purpose
    const user = {
        id: '1',
        name: 'Nawaf',
        email: 'nawaf.alhasosah@gmail.com',
        createdAt: 10
    }

    Intercom({
        app_id: 'x1ifg06k',
        //Later i will replace with the real user informations
        user_id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.createdAt,
    });

    return (
        <main className="flex h-screen">
            {/* Sidebar */}
            <div className="lg:flex hidden flex-col justify-between items-center border-e p-4 dark:border-e-[#19293d] border-e-[#e4e4e4] h-screen w-64 fixed gap-16 overflow-y-auto">
                <Link
                    className="flex text-sm font-light dark:text-white focus:outline-none focus:opacity-80 flex-col justify-center items-center gap-2"
                    href="/dashboard/stat"
                >
                    <img
                        src="/awraq-logo.svg"
                        className="h-12 object-contain dark:hidden"
                        alt="Logo"
                    />
                    <img
                        src="/dark-awraq-logo.svg"
                        className="h-12 object-contain hidden dark:block"
                        alt="Dark Logo"
                    />
                    <span className="flex flex-row justify-center items-center gap-2 w-full">
                        <p className="text-gray-500 dark:text-gray-400">{t("betaVersion")}</p>
                        <div className="hs-tooltip inline-block">
                            <button
                                type="button"
                                className="hs-tooltip-toggle inline-flex justify-center items-center gap-2"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <i className="ri-information-2-line text-lg text-neutral-400 dark:text-neutral-400" />
                                <span
                                    className={`hs-tooltip-content absolute z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-[#2b3c53] ${tooltipVisible ? "opacity-100 visible" : "opacity-0 invisible"
                                        } transition-opacity`}
                                    role="tooltip"
                                >
                                    {t("tooltipBetaVersion")}
                                </span>
                            </button>
                        </div>
                    </span>
                </Link>
                <DashboardSideBarNavLg />
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
                                <p className="text-gray-500 dark:text-gray-400">{t("accountManager")}</p>
                            </span>
                        </div>
                    </button>
                    <button className="flex flex-row justify-center items-center gap-2 w-full border border-red-100 bg-red-200 dark:border-red-900 dark:bg-red-800 rounded-xl py-2 px-4">
                        <h1 className="font-medium text-red-800 dark:text-red-300">{t("signOut")}</h1>
                        <i className="ri-logout-circle-line text-red-800 dark:text-red-300" />
                    </button>
                </div>
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

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto lg:p-6 p-0 lg:[margin-inline-start:16rem]">
                <Header headerTitle={pageTitle} />
                <SideBarMobileMenu />
                <div className="lg:px-0 px-4 mt-4 gap-4 flex flex-col">
                    <MaintenanceNotification maintenanceMessage="يرجى التنويه بأننا سنقوم بأعمال صيانة للمنصة في تاريخ 7/10 من الساعة 10:00 ص حتى الساعة 12:00 ص"/>
                    <PlanSubscriptionExpired />
                </div>
                {children}
                <Footer />
            </div>
        </main>
    );
}

