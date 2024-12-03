import React from 'react'
import DropdownIconButton from '../DropdownIconButton'

interface Props {
    onTimePeriodChange: (timePeriod: string) => void;
}

export default function AnalyticsHeading({ onTimePeriodChange }: Props) {
    const list = [
        { title: 'آخر 24 ساعة', timePeriod: '24h', href: '' },
        { title: 'آخر 7 أيام', timePeriod: '7d', href: '' },
        { title: 'آخر 30 يوم', timePeriod: '30d', href: '' },
    ];

    return (
        <div className='flex flex-row justify-between items-center w-full'>
            <DropdownIconButton
                icon='sound-module-line'
                isToggleButton={true}
                list={list}
                onSelect={(timePeriod: string) => {
                    onTimePeriodChange(timePeriod);
                }}
            />
            <h1 className='text-2xl font-bold'>إحصائيات المنشأة</h1>
        </div>
    );
}