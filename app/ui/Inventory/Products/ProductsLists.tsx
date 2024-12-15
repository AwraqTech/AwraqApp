"use client"

import Image from 'next/image'
import React from 'react'
import { fakeProductsData } from '@/app/data/fakeProductsData'
import { useSelectableTable } from '@/app/hooks/useSelectableTable';
import { useModal } from '@/app/context/ModalContext';

export default function ProductsLists() {
    const { selected, toggleSelect, toggleSelectAll, isSelected, isAllSelected } = useSelectableTable({
        data: fakeProductsData,
        getId: (product) => product.id,
    });
    const { openModal } = useModal();

    return (
        <div className="flex flex-col bg-[#fafafa] border shadow-sm rounded-xl px-6 pt-4 dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-[#2b3c53]">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            <input
                                                type="checkbox"
                                                checked={isAllSelected}
                                                onChange={toggleSelectAll}
                                                className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded text-[#3784d1] focus:ring-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:checked:bg-[#3784d1] dark:checked:border-[#3784d1] dark:focus:ring-offset-[#20344e]"
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            صورة المنتج
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            عنوان المنتج
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            تصنيف المنتج
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            رمز SKU
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            سعر المنتج
                                        </th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            المخزون
                                        </th>
                                        <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">
                                            تعديل
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-[#2b3c53]">
                                    {fakeProductsData.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected(product.id)}
                                                    onChange={() => toggleSelect(product.id)}
                                                    className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded text-[#3784d1] focus:ring-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#2b3c53] dark:checked:bg-[#3784d1] dark:checked:border-[#3784d1] dark:focus:ring-offset-[#20344e]"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                <Image
                                                    src={product.image}
                                                    alt="Product Image"
                                                    width={1080}
                                                    height={1080}
                                                    className="lg:w-16 lg:h-16 w-10 h-10 rounded-md object-cover"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.sku}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.inventory}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <button
                                                    onClick={() => openModal('modifyProduct')}
                                                    type="button"
                                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                >
                                                    تعديل
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}