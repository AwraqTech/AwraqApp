import { useState } from 'react';

export const useCalendarLogic = () => {
  const currentDate = new Date();
  
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());

  // Handle month change
  const handleMonthChange = (e: any) => {
    setMonth(Number(e.target.value));
  };

  // Handle year change
  const handleYearChange = (e: any) => {
    setYear(Number(e.target.value));
  };

  // Handle date selection
  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
  };

  // Go to the previous month
  const handlePrevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  // Go to the next month
  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  return {
    month,
    year,
    selectedDate,
    handleMonthChange,
    handleYearChange,
    handleDateSelect,
    handlePrevMonth,
    handleNextMonth
  };
};
