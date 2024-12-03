"use client"

import { useState } from 'react'

export default function useToggleListDropdown() {
    const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false);

    const toggleDropdownVisible = () => {
        setIsDropdownShown(prevState => !prevState);
    };

    return {
        isDropdownShown,
        toggleDropdownVisible
    }
}
