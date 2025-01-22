"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface CompleteInformationContextType {
    documentType: string;
    setDocumentType: (value: string) => void;
    commercialRegisterationNumber: string;
    setCcommercialRegisterationNumber: (value: string) => void;
    entityName: string;
    setEntityName: (value: string) => void;
    issueDate: string;
    setIssueDate: (value: string) => void;
    expirationDate: string;
    setExpirationDate: (value: string) => void;
    businessActivity: string;
    setBusinessActivity: (value: string) => void;
    registrationStatus: string;
    setRegistrationStatus: (value: string) => void;
    isVatRegistred: boolean;
    setIsVatRegistred: (value: boolean) => void;
    vatRegistrationNumber: string | undefined;
    setVatRegistrationNumber: (value: string) => void;
    ownerName: string;
    setOwnerName: (value: string) => void;
    ownerBirthDate: string;
    setOwnerBirthDate: (value: string) => void;
    onwerIdType: string;
    setOnwerIdType: (value: string) => void;
    onwerIdNumber: string;
    setOnwerIdNumber: (value: string) => void;
    onwerPhoneNo: string;
    setOnwerPhoneNo: (value: string) => void;
    ownerEmail: string;
    setOwnerEmail: (value: string) => void;
    entityAddress: EntityAddress;
    setEntityAddress: (value: EntityAddress) => void;
    subscriptionPlan: SubscriptionPlan;
    setSubscriptionPlan: (value: SubscriptionPlan) => void;
}

interface EntityAddress {
    country: string;
    setCountry: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    province: string;
    setProvince: (value: string) => void;
    destric: string;
    setDestrict: (value: string) => void;
    street: string;
    setStreet: (value: string) => void;
    postalCode: string;
    setPostalCode: (value: string) => void;
}

interface SubscriptionPlan {
    planName: string;
    setPlanName: (value: string) => void;
    planPrice: string;
    setPlanPrice: (value: string) => void;
    planDuration: string;
    setPlanDuration: (value: string) => void;
    numberOfBranches: number;
    setNumberOfBranches: (value: number) => void;
    numberOfPosDevices: number;
    setNumberOfPosDevices: (value: number) => void;
}

const CompleteInformationContext = createContext<CompleteInformationContextType | undefined>(undefined);

interface CompleteInformationProviderProps {
    children: ReactNode;
}

export const CompleteInformationProvider = ({ children }: CompleteInformationProviderProps) => {
    const [documentType, setDocumentType] = useState('CR');
    const [commercialRegisterationNumber, setCcommercialRegisterationNumber] = useState('');
    const [entityName, setEntityName] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [businessActivity, setBusinessActivity] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [isVatRegistred, setIsVatRegistred] = useState(false);
    const [vatRegistrationNumber, setVatRegistrationNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerBirthDate, setOwnerBirthDate] = useState('');
    const [onwerIdType, setOnwerIdType] = useState('National ID');
    const [onwerIdNumber, setOnwerIdNumber] = useState('');
    const [onwerPhoneNo, setOnwerPhoneNo] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [entityAddress, setEntityAddress] = useState({
        country: '',
        setCountry: (value: string) => setEntityAddress({ ...entityAddress, country: value }),
        city: '',
        setCity: (value: string) => setEntityAddress({ ...entityAddress, city: value }),
        province: '',
        setProvince: (value: string) => setEntityAddress({ ...entityAddress, province: value }),
        destric: '',
        setDestrict: (value: string) => setEntityAddress({ ...entityAddress, destric: value }),
        street: '',
        setStreet: (value: string) => setEntityAddress({ ...entityAddress, street: value }),
        postalCode: '',
        setPostalCode: (value: string) => setEntityAddress({ ...entityAddress, postalCode: value }),
    });
    const [subscriptionPlan, setSubscriptionPlan] = useState({
        planName: '',
        setPlanName: (value: string) => setSubscriptionPlan({ ...subscriptionPlan, planName: value }),
        planPrice: '',
        setPlanPrice: (value: string) => setSubscriptionPlan({ ...subscriptionPlan, planPrice: value }),
        planDuration: '',
        setPlanDuration: (value: string) => setSubscriptionPlan({ ...subscriptionPlan, planDuration: value }),
        numberOfBranches: 0,
        setNumberOfBranches: (value: number) => setSubscriptionPlan({ ...subscriptionPlan, numberOfBranches: value }),
        numberOfPosDevices: 0,
        setNumberOfPosDevices: (value: number) => setSubscriptionPlan({ ...subscriptionPlan, numberOfPosDevices: value }),
    });

    return (
        <CompleteInformationContext.Provider
            value={{
                documentType,
                setDocumentType,
                commercialRegisterationNumber,
                setCcommercialRegisterationNumber,
                entityName,
                setEntityName,
                issueDate,
                setIssueDate,
                expirationDate,
                setExpirationDate,
                businessActivity,
                setBusinessActivity,
                registrationStatus,
                setRegistrationStatus,
                isVatRegistred,
                setIsVatRegistred,
                vatRegistrationNumber,
                setVatRegistrationNumber,
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
                setOwnerEmail,
                entityAddress,
                setEntityAddress,
                subscriptionPlan,
                setSubscriptionPlan
            }}
        >
            {children}
        </CompleteInformationContext.Provider>
    );
};

export const useCompleteInformation = () => {
    const context = useContext(CompleteInformationContext);
    if (!context) {
        throw new Error('useCompleteInformation must be used within a CompleteInformationProvider');
    }
    return context;
};