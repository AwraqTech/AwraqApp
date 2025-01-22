"use client"

import { useCompleteInformation } from '../context/CompleteInformationContext';

export default function useHandleIdentityUser() {
    const {
        ownerName, 
        setOwnerName, 
        ownerBirthDate, 
        setOwnerBirthDate, 
        onwerIdType, 
        setOnwerIdType, 
        onwerIdNumber, 
        setOnwerIdNumber, 
        onwerPhoneNo, 
        setOnwerPhoneNo, 
        ownerEmail, 
        setOwnerEmail
    } = useCompleteInformation();

    const handleNationalType = (id: string) => {
        setOnwerIdType(id);
    };

    const ownerNameChange = (name: string) => {
        setOwnerName(name);
    };

    const ownerBirthDateChange = (date: string) => {
        setOwnerBirthDate(date);
    };

    const onwerIdNumberChange = (id: string) => {
        setOnwerIdNumber(id);
    };

    const onwerPhoneNoChange = (phone: string) => {
        setOnwerPhoneNo(phone);
    };

    const ownerEmailChange = (email: string) => {
        setOwnerEmail(email);
    };

    return {
        ownerName,
        ownerNameChange,
        ownerBirthDate,
        ownerBirthDateChange,
        onwerPhoneNo,
        onwerPhoneNoChange,
        ownerEmail,
        ownerEmailChange,
        onwerIdNumber,
        onwerIdNumberChange,
        onwerIdType,
        handleNationalType
    };
};