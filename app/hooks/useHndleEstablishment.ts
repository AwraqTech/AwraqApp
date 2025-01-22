"use client"

import { useCompleteInformation } from '../context/CompleteInformationContext';

export default function useHndleEstablishment() {
    const {
        documentType,
        setDocumentType,
        commercialRegisterationNumber,
        setCcommercialRegisterationNumber,
        entityName,
        issueDate,
        expirationDate,
        businessActivity,
        registrationStatus,
        isVatRegistred,
        setIsVatRegistred,
        vatRegistrationNumber,
        setVatRegistrationNumber,
    } = useCompleteInformation();

    const documentTypeChange = (type: string) => {
        setDocumentType(type);
    };

    const commercialRegisterationNumberChange = (type: string) => {
        setCcommercialRegisterationNumber(type);
    };

    const vatRegistrationNumberChange = (type: string) => {
        setVatRegistrationNumber(type);
    };

    const handleToggleVatRegi = (vat: boolean) => {
        setIsVatRegistred(vat);
    };

    console.log(commercialRegisterationNumber);

    return {
        documentType,
        isVatRegistred,
        documentTypeChange,
        handleToggleVatRegi,
        commercialRegisterationNumber,
        entityName,
        issueDate,
        expirationDate,
        businessActivity,
        registrationStatus,
        vatRegistrationNumber,
        commercialRegisterationNumberChange,
        vatRegistrationNumberChange
    };
};