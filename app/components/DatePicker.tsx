import React from 'react'
import { useCalendarLogic } from '../hooks/useCalendarLogic';
import useSidebarLogic from '../hooks/useSidebarCollapse';

type Props = {}

export default function DatePicker({ }: Props) {
    const {
        month,
        year,
        selectedDate,
        handleMonthChange,
        handleYearChange,
        handleDateSelect,
        handlePrevMonth,
        handleNextMonth
    } = useCalendarLogic();
    const { isArabic } = useSidebarLogic();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    return (
        <div className="w-80 flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden dark:bg-[#2b3c53] dark:border-[#364861] border-gray-300">
            <div className="p-3 space-y-0.5">
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                    <div className="col-span-1">
                        <button type="button" onClick={handlePrevMonth} aria-label="Previous">
                            <i className={`ri-${!isArabic ? 'arrow-right-s-line' : 'arrow-left-s-line'} text-lg text-black dark:text-white`} />
                        </button>
                    </div>

                    <div className="col-span-3 flex justify-center items-center gap-x-1">
                        <select value={month} onChange={handleMonthChange} className="hidden">
                            {months.map((monthName, index) => (
                                <option key={index} value={index}>
                                    {monthName}
                                </option>
                            ))}
                        </select>

                        <span className="text-black dark:text-white">/</span>

                        <select value={year} onChange={handleYearChange} className="hidden">
                            {[2023, 2024, 2025, 2026, 2027].map((yr) => (
                                <option key={yr} value={yr}>
                                    {yr}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <button type="button" onClick={handleNextMonth} aria-label="Next">
                            <i className={`ri-${!isArabic ? 'arrow-left-s-line' : 'arrow-right-s-line'} text-lg text-black dark:text-white`} />
                        </button>
                    </div>
                </div>

                <div className="flex pb-1.5">
                    {daysOfWeek.map((day, idx) => (
                        <span key={idx} className="m-px w-10 block text-center text-sm text-black dark:text-white">
                            {day}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <div key={day}>
                            <button
                                type="button"
                                className={`m-px size-10 flex justify-center items-center border border-transparent text-sm text-black dark:text-white rounded-full ${selectedDate === day ? 'bg-[#43a2fe] text-white' : ''}`}
                                onClick={() => handleDateSelect(day)}
                            >
                                {day}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}