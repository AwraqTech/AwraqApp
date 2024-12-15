import React, { ReactNode } from 'react';
import { useModal } from '@/app/context/ModalContext';

interface ModalProps {
    id: string;
    title: string;
    children: ReactNode;
}

export const Modal = ({ title, children, id }: ModalProps) => {
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen(id)) return null;

    return (
        <div
            className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 lg:px-0 px-4"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-white w-full max-w-5xl mx-auto border shadow-sm rounded-xl dark:bg-[#111c2a] dark:border-[#2b3c53] dark:shadow-neutral-700/70">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-[#2b3c53]">
                    <h3 className="font-bold text-gray-800 dark:text-white">{title}</h3>
                    <button
                        type="button"
                        className="inline-flex px-2 py-1 justify-center items-center rounded-full border dark:border-[#2b3c53] bg-white text-black dark:text-white hover:bg-gray-200 dark:bg-[#2b3c53] dark:hover:bg-[#394f6e]"
                        onClick={() => closeModal(id)}
                        aria-label="Close"
                    >
                        <i className='ri-close-large-fill' />
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};
