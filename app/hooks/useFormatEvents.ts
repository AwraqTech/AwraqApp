import { format, parseISO } from 'date-fns';

export default function useFormatEvents() {
    const groupEventsByDate = (events: any) => {
        // First group by date
        const grouped = events.reduce((acc: any, event: any) => {
            const eventDate = event.createdAt.split(' ')[0]; // Getting just the date (YYYY-MM-DD)
            if (!acc[eventDate]) {
                acc[eventDate] = [];
            }
            acc[eventDate].push(event);
            return acc;
        }, {});

        // Sort each group by time (using createdAt as the full date-time)
        Object.keys(grouped).forEach(date => {
            grouped[date] = grouped[date].sort((a: any, b: any) => 
                parseISO(b.createdAt).getTime() - parseISO(a.createdAt).getTime()
            );
        });

        return grouped;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return format(date, 'd MMM, yyyy'); // Format to "1 Aug, 2023"
    };

    return { groupEventsByDate, formatDate };
}
