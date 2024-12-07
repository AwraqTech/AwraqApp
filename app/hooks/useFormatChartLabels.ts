import { useMemo } from 'react';
import dayjs from 'dayjs';

// Format date with translation support
const formatDate = (t: (key: string) => string) => (date: string, timePeriod: string) => {
    const dayjsDate = dayjs(date);

    if (timePeriod === '24h') {
        const hour = dayjsDate.format('h'); // 12-hour format
        const isAM = dayjsDate.hour() < 12; // Determine AM or PM
        const period = isAM ? t("am") : t("pm"); // Use translations for AM/PM
        return `${hour} ${period}`;
    } else if (timePeriod === '7d' || timePeriod === '30d') {
        return dayjsDate.format('DD-MMM'); // Format for weekly or monthly periods
    }
    return date; // Fallback for unsupported time periods
};

// Adjust labels based on the selected time period
const adjustLabelsForTimePeriod = (labels: string[], timePeriod: string) => {
    if (timePeriod === '24h') {
        return labels.filter((_, index) => index % 4 === 0); // Reduce hourly labels
    } else if (timePeriod === '7d') {
        return labels; // Use all labels for weekly
    } else if (timePeriod === '30d') {
        return labels.filter((_, index) => index % 5 === 0); // Reduce monthly labels
    }
    return labels; // Fallback for unsupported time periods
};

// Custom hook to format chart labels
const useFormatChartLabels = (
    labels: string[],
    selectedTimePeriod: string,
    t: (key: string) => string // Translation function
) => {
    const adjustedLabels = useMemo(() => {
        const filteredLabels = adjustLabelsForTimePeriod(labels, selectedTimePeriod);
        const formatWithTranslation = formatDate(t); // Pass `t` to `formatDate`
        return filteredLabels.map(label => formatWithTranslation(label, selectedTimePeriod));
    }, [labels, selectedTimePeriod, t]);

    return adjustedLabels;
};

export default useFormatChartLabels;
