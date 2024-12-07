import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const createDateFormatter = (t: (key: string) => string) => (date: string, timePeriod: string) => {
    const dayjsDate = dayjs(date);

    if (timePeriod === '24h') {
        const hour = dayjsDate.format('h');
        const isAM = dayjsDate.hour() < 12;
        const period = isAM ? t("am") : t("pm");
        return `${hour} ${period}`;
    } else if (timePeriod === '7d' || timePeriod === '30d') {
        return dayjsDate.format('DD-MMM');
    }
    return date;
};

const useFormatChartDesktop = (labels: string[], selectedTimePeriod: string) => {
    const t = useTranslations('Chart');

    const formatDate = createDateFormatter(t);

    const adjustedLabels = useMemo(() => {
        return labels.map(label => formatDate(label, selectedTimePeriod));
    }, [labels, selectedTimePeriod, formatDate]);

    return adjustedLabels;
};

export default useFormatChartDesktop;
