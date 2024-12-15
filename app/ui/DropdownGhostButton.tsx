"use client"

import React from 'react'
import useToggleListDropdown from '../hooks/useToggleListDropdown';

type List = {
    title: string;
    filterType: string;
}

type Props = {
    icon: string;
    buttonTitle: string;
    list: List[];
    onSelect: (filterType: string) => void;
}

export default function DropdownGhostButton({ icon, buttonTitle, list, onSelect }: Props) {
    const { isDropdownShown, toggleDropdownVisible } = useToggleListDropdown();

    const handleSelect = (timePeriod: string) => {
        onSelect(timePeriod);
        toggleDropdownVisible();
    };

    return (
        <div className="hs-dropdown relative inline-flex">
            <button
                id="hs-dropdown-custom-icon-trigger"
                type="button"
                className="hs-dropdown-toggle flex flex-row justify-center items-center gap-2 px-3 py-2"
                aria-haspopup="menu"
                aria-expanded={isDropdownShown ? "true" : "false"}
                aria-label="Dropdown"
                onClick={toggleDropdownVisible}
            >
                <i className={`ri-${icon} text-lg text-black dark:text-white`} />
                <h3>{buttonTitle}</h3>
            </button>
            <div
                className={`hs-dropdown-menu absolute top-8 z-50 transition-opacity duration-300 ease-in-out ${isDropdownShown ? 'opacity-100 visible' : 'opacity-0 invisible'} min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-[#2b3c53] dark:border dark:border-[#364861] left-0`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-icon-trigger"
            >
                <div className="p-1 space-y-0.5">
                    {list.map((listItem, index) => (
                        <button
                            key={index}
                            className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-[#3a506e] dark:hover:text-neutral-300 dark:focus:bg-[#364861]"
                            onClick={() => handleSelect(listItem.filterType)}
                        >
                            {listItem.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
