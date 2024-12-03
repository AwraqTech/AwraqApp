"use client"

import React from 'react'
import useToggleListDropdown from '../hooks/useToggleListDropdown';

type List = {
    title: string;
    timePeriod: string;
    href: string;
}

type Props = {
    icon: string;
    list: List[];
    isToggleButton: boolean;
    onSelect: (timePeriod: string) => void;
}

export default function DropdownIconButton({ icon, list, isToggleButton, onSelect }: Props) {
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
                className="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
                aria-haspopup="menu"
                aria-expanded={isDropdownShown ? "true" : "false"}
                aria-label="Dropdown"
                onClick={toggleDropdownVisible}
            >
                <i className={`ri-${icon} text-lg text-black dark:text-white`} />
            </button>
            <div
                className={`hs-dropdown-menu absolute top-8 z-50 transition-opacity duration-300 ease-in-out ${isDropdownShown ? 'opacity-100 visible' : 'opacity-0 invisible'} min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-[#2b3c53] dark:border dark:border-[#364861]`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-icon-trigger"
            >
                <div className="p-1 space-y-0.5">
                    {list.map((listItem, index) => (
                        isToggleButton ? (
                            <button
                                key={index}
                                className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-[#3a506e] dark:hover:text-neutral-300 dark:focus:bg-[#364861]"
                                onClick={() => handleSelect(listItem.timePeriod)}
                            >
                                {listItem.title}
                            </button>
                        ) : (
                            <a
                                key={index}
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-[#3a506e] dark:hover:text-neutral-300 dark:focus:bg-[#364861]"
                                href={listItem.href}
                            >
                                {listItem.title}
                            </a>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
