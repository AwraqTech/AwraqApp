import { useMemo } from 'react';
import dayjs from 'dayjs';

const formatDate = (date: string, timePeriod: string) => {
    const dayjsDate = dayjs(date);
    if (timePeriod === '24h') {
        return dayjsDate.format('HH');
    } else if (timePeriod === '7d' || timePeriod === '30d') {
        return dayjsDate.format('DD-MMM');
    }
    return date;
};

const adjustLabelsForTimePeriod = (labels: string[], timePeriod: string) => {
    if (timePeriod === '24h') {
        return labels.filter((_, index) => index % 4 === 0);
    } else if (timePeriod === '7d') {
        return labels;
    } else if (timePeriod === '30d') {
        return labels.filter((_, index) => index % 5 === 0);
    }
    return labels;
};

const useFormatChartLabels = (labels: string[], selectedTimePeriod: string) => {
    const adjustedLabels = useMemo(() => {
        const filteredLabels = adjustLabelsForTimePeriod(labels, selectedTimePeriod);
        return filteredLabels.map(label => formatDate(label, selectedTimePeriod));
    }, [labels, selectedTimePeriod]);

    return adjustedLabels;
};

export default useFormatChartLabels;
