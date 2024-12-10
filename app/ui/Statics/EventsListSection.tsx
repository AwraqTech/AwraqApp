import React from 'react';
import { fakeEvents } from '@/app/data/fakeEventsList';
import useFormatEvents from '@/app/hooks/useFormatEvents';

const EventsListSection = () => {
    const { groupEventsByDate, formatDate } = useFormatEvents();
    const groupedEvents = groupEventsByDate(fakeEvents);

    return (
        <div className='grid grid-rows-[auto,1fr] w-full max-h-[300px] overflow-y-auto'>
            {Object.keys(groupedEvents).map((date) => (
                <div key={date}>
                    <div className="ps-2 my-2 first:mt-0">
                        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                            {formatDate(date)}
                        </h3>
                    </div>
                    {groupedEvents[date].map((event: any) => (
                        <div key={event.id} className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-[#2b3c53]">
                            <a className="z-[1] absolute inset-0" href={event.href}></a>
                            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-500 dark:group-hover:after:bg-neutral-600">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-gray-400 dark:group-hover:border-gray-400"></div>
                                </div>
                            </div>
                            <div className="grow p-2 pb-8">
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
    );
};

export default EventsListSection;
