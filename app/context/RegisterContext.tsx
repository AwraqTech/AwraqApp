"use client"

import React, { createContext, useContext, useState } from "react";

interface RegisterContextProps {
    isOTP: boolean;
    setIsOTP: (value: boolean) => void;
    generatedCode: string;
    setGeneratedCode: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    name: string;
    setName: (value: string) => void;
    isSubmitting: boolean;
    setIsSubmitting: (value: boolean) => void;
    isForgetPassword: boolean;
    setIsForgetPassword: (value: boolean) => void;
    passwordResetSuccess: boolean;
    setPasswordResetSuccess: (value: boolean) => void;
    successMessage: string;
    setSuccessMessage: (value: string) => void;
    otpGeneratedAt: number | null;
    setOtpGeneratedAt: (value: number | null) => void;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(undefined);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOTP, setIsOTP] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [generatedCode, setGeneratedCode] = useState("");
    const [isForgetPassword, setIsForgetPassword] = useState<boolean>(false);
    const [passwordResetSuccess, setPasswordResetSuccess] = useState<boolean>(false);
    const [otpGeneratedAt, setOtpGeneratedAt] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <RegisterContext.Provider value={{
            isOTP,
            setIsOTP,
            generatedCode,
            setGeneratedCode,
            email,
            setEmail,
            password,
            setPassword,
            phone,
            setPhone,
            name,
            setName,
            isSubmitting,
            setIsSubmitting,
            isForgetPassword,
            setIsForgetPassword,
            passwordResetSuccess,
            setPasswordResetSuccess,
            successMessage,
            setSuccessMessage,
            otpGeneratedAt, 
            setOtpGeneratedAt
        }}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegisterContext = () => {
    const context = useContext(RegisterContext);
    if (!context) {
        throw new Error("useRegisterContext must be used within a RegisterProvider");
    }
    return context;
};
