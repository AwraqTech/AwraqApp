"use client";

import { useState } from "react";
import { useHandleErrors } from "../context/ErrorContext";
import { useRegisterContext } from "../context/RegisterContext";
import { useTranslations } from "next-intl";

export default function useLogin() {
    const { handleError } = useHandleErrors();
    const t = useTranslations("Auth");

    // State and context for OTP
    const {
        isOTP,
        setIsOTP,
        generatedCode,
        setGeneratedCode,
        email,
        setEmail,
        password,
        setPassword,
        isSubmitting,
        setIsSubmitting
    } = useRegisterContext();

    /**
     * 1. Handle input changes
     */
    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);

    /**
     * 2. Validate inputs
     */
    const handleValidateInput = () => {
        if (!email || !password) {
            handleError(t("emailOrPasswordMissing"));
            return false;
        }

        if (!validateEmail(email)) {
            handleError(t("email_invalid"));
            return false;
        }

        if (password.length < 8) {
            handleError(t("passwordTooShort"));
            return false;
        }

        return true;
    };

    // Helper function: Validate email format
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    /**
     * 3. Authenticate user
     * Replace this with your actual API logic.
     */
    const authenticateUser = async () => {
        try {
            console.log("Authenticating user...");
            // Simulate API call to check user credentials
            const userAuthenticated = true; // Replace with actual API response

            if (!userAuthenticated) {
                handleError(t("invalidCredentials"));
                return false;
            }

            return true;
        } catch (error) {
            handleError(t("unexpectedLoginError"));
            return false;
        }
    };

    /**
     * 4. Generate and send OTP
     */
    const handleGenerateOTPandSend = async () => {
        const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedCode(generatedOTP);
        setIsSubmitting(true);

        try {
            console.log(`Your OTP is: ${generatedOTP}. \nPlease don't share your OTP with anyone.`);
            setIsOTP(true);
        } catch (error) {
            handleError(t("unexpected_error"));
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * 5. Login existing user
     */
    const handleLoginUser = async (event: React.FormEvent) => {
        event.preventDefault();

        // Validate inputs
        if (!handleValidateInput()) return;

        // Authenticate user
        const authenticated = await authenticateUser();
        if (!authenticated) return;

        // Generate and send OTP
        await handleGenerateOTPandSend();
    };

    /**
     * Exposed hook values and methods
     */
    return {
        email,
        password,
        isOTP,
        generatedCode,
        isSubmitting,
        handleEmailChange,
        handlePasswordChange,
        handleLoginUser,
    };
}
