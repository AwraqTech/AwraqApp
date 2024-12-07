import { fakeLastNotifications } from '@/app/data/fakeLastNotificationsData';
import useFormatEvents from '@/app/hooks/useFormatEvents';
import React from 'react'

export default function LastNotificationsSection() {
    const { groupEventsByDate, formatDate } = useFormatEvents();
    const groupedEvents = groupEventsByDate(fakeLastNotifications);

    return (
        <div className='flex flex-col w-full h-80 overflow-y-scroll'>
            {Object.keys(groupedEvents).map((date) => (
                <div key={date}>
                    <div className="ps-2 my-2 first:mt-0">
                        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                            {formatDate(date)}
                        </h3>
                    </div>
                    {groupedEvents[date].map((event: any) => (
                        <div key={event.id} className="flex gap-x-3 relative group border-b border-b-gray-200 dark:border-b-gray-700">
                            <div className="grow p-2">
                                <div className='absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600' />
                                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                    {event.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {event.description}
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {event.createdAt.split(' ')[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}