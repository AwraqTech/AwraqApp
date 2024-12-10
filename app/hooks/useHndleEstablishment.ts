"use client"

import { useState } from 'react'

export default function useHndleEstablishment() {
    const [documentType, setDocumentType] = useState<string>('CR');
    const [isVat, setIsVat] = useState<boolean>(false);

    const handleToggleDocumentType = (type: string) => {
        setDocumentType(type);
    };

    const handleToggleVatRegi = (vat: boolean) => {
        setIsVat(vat);
    };

    return {
        documentType,
        isVat,
        handleToggleDocumentType,
        handleToggleVatRegi
    };
};