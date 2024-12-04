import React from 'react'
import DropdownIconButton from '../DropdownIconButton'
import DatePickerButton from '../DatePickerButton';

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
            <div className='flex flex-row justify-center items-start gap-2'>
                <DropdownIconButton
                    icon='sound-module-line'
                    isToggleButton={true}
                    list={list}
                    onSelect={(timePeriod: string) => {
                        onTimePeriodChange(timePeriod);
                    }}
                />
                <DatePickerButton />
            </div>
            <h1 className='text-2xl font-bold lg:flex hidden'>إحصائيات المنشأة</h1>
        </div>
    );
}