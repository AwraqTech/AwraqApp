import React from 'react'

type Props = {
    isSubmitting: boolean;
    title: string;
}

export default function SubmittingButton({ isSubmitting, title }: Props) {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`${isSubmitting ? 'py-3.5' : 'py-3'} mt-4 px-4 w-full justify-center flex items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]`}
        >
            {isSubmitting ? (
                <span
                    className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                />
            ) : (
                <h3>{title}</h3>
            )}
        </button>

    );
}