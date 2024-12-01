"use client";

import React from "react";
import MainNavSection from "./MainNavSection";
import FinancialSection from "./FinancialSection";
import useSidebarLogic from "../hooks/useSidebarCollapse";
import SettingSection from "./SettingSection";

export default function DashboardSideBarNavLg() {
    const { isArabic, openMenus, handleToggle, isActive } = useSidebarLogic();

    return (
        <div className="flex flex-col justify-start items-start gap-8 w-full h-full">
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
    );
}
