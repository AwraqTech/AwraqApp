import React from 'react'
import { fakeUsersData } from '@/app/data/fakeUsersData'

export default function UsersList() {
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg shadow overflow-hidden dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-[#2b3c53]">
                            <thead className="bg-[#fafafa] dark:bg-[#111c2a]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start font-bold text-black uppercase dark:text-neutral-400">إسم العميل</th>
                                    <th scope="col" className="px-6 py-3 text-start font-bold text-black uppercase dark:text-neutral-400">رقم الهاتف</th>
                                    <th scope="col" className="px-6 py-3 text-start font-bold text-black uppercase dark:text-neutral-400 hidden lg:table-cell">الفرع</th>
                                    <th scope="col" className="px-6 py-3 text-end font-bold text-black uppercase dark:text-neutral-400 hidden lg:table-cell">التفاصيل</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-[#2b3c53]">
                                {fakeUsersData.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phoneNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 hidden lg:table-cell">{user.branch}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium hidden lg:table-cell">
                                            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent">
                                                <i className='ri-edit-circle-line text-md text-[#43a2fe] hover:text-[#3888d8] focus:outline-none focus:text-[#3888d8] disabled:opacity-50 disabled:pointer-events-none' />
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
    )
}
