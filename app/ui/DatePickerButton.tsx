import React from 'react'
import useToggleListDropdown from '../hooks/useToggleListDropdown';
import DatePicker from '../components/DatePicker';
import { useCalendarLogic } from '../hooks/useCalendarLogic';

export default function DatePickerButton() {
    const { isDropdownShown, toggleDropdownVisible } = useToggleListDropdown();
    const {
        month,
        year,
        selectedDate,
    } = useCalendarLogic();
    
  return (
    <div className="hs-dropdown relative inline-flex">
            <button
                className="flex flex-row justify-center items-center py-[3px] px-3 text-sm font-semibold rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
                aria-expanded={isDropdownShown ? "true" : "false"}
                onClick={toggleDropdownVisible}
            >
                {`${selectedDate}/${month}/${year} إلى ${selectedDate}/${month}/${year}`}
                <i className={`ri-arrow-drop-down-line text-lg text-black dark:text-white`} />
            </button>
            <div
                className={`hs-dropdown-menu absolute top-12 z-50 transition-opacity duration-300 ease-in-out ${isDropdownShown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <DatePicker />
            </div>
        </div>
  )
}