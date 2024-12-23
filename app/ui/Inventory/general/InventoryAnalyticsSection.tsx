import React from 'react'
import TopSellingProducts from './TopSellingProducts';
import LowestSellingProducts from './LowestSellingProducts';
import InventoryLifeCycle from './InventoryLifeCycle';
import NearToFinishInventory from './NearToFinishInventory';

export default function InventoryAnalyticsSection() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <TopSellingProducts />
            <LowestSellingProducts />
            <InventoryLifeCycle />
            <NearToFinishInventory />
        </div>
    );
};