"use client";

import React from "react";
import { Link } from "@/navigation";
import { useSidebarNavLinks } from "../hooks/SidebarNavList";
import { useTranslations } from "next-intl";

interface Props {
    isArabic: boolean;
    openMenus: string[];
    handleToggle: (link: string) => void;
    isActive: (path: string) => boolean;
}

export default function SettingSection({
    isArabic,
    openMenus,
    handleToggle,
    isActive,
}: Props) {
    const { settingLinks } = useSidebarNavLinks();
    const t = useTranslations("SideBarNav");
    return (
        <div className="flex flex-col gap-2 w-full">
            <h1 className="font-bold text-md">{t("mainAccountSettings")}</h1>
            <div className="flex flex-col justify-start items-center gap-2 w-full">
                {settingLinks.map((nav, index) => (
                    <div key={index} className="w-full">
                        <Link
                            href={nav.link}
                            className={`flex flex-row justify-between items-center py-2 px-4 rounded-lg hover:dark:bg-[#111c2a] hover:bg-[#f1f1f1] w-full ${
                                isActive(nav.link) ? "bg-[#f1f1f1] dark:bg-[#111c2a]" : "bg-white dark:bg-[#071321]"
                            }`}
                            onClick={(e) => {
                                if (nav.isCollapsable) {
                                    e.preventDefault();
                                    handleToggle(nav.link);
                                }
                            }}
                        >
                            <span className="flex flex-row justify-start items-center text-md text-black dark:text-white gap-2">
                                <i className={`ri-${nav.icon}`} />
                                <h1 className="font-light">{nav.title}</h1>
                            </span>
                            {nav.isCollapsable && (
                                <i
                                    className={`ri-arrow-${
                                        openMenus.includes(nav.link)
                                            ? "down"
                                            : isArabic
                                            ? "right"
                                            : "left"
                                    }-s-line text-md text-black dark:text-white`}
                                />
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
