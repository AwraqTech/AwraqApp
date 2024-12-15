import React from 'react'

type Props = {
    maintenanceMessage: string;
}

export default function MaintenanceNotification({maintenanceMessage}: Props) {
    return (
        <div
            className="bg-blue-50 flex flex-row border w-full max-w-[1490px] mx-auto items-center justify-between border-blue-200 text-sm text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
            role="alert"
            aria-labelledby="hs-with-description-label"
        >
            <div className="flex">
                <div className="shrink-0">
                    <i className='ri-information-line' />
                </div>
                <div className="ms-4">
                    <h3 id="hs-with-description-label" className="text-sm font-semibold">
                        تنبيه أعمال صيانة
                    </h3>
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {maintenanceMessage}
                    </div>
                </div>
            </div>
        </div>
    );
}