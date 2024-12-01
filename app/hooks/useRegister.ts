"use client";

import { useTranslations } from "next-intl";
import { useHandleErrors } from "../context/ErrorContext";
import { useRegisterContext } from "../context/RegisterContext";

export default function useRegister() {
    const { handleError } = useHandleErrors();

    // State for OTP
    const {
        isOTP,
        setIsOTP,
        generatedCode,
        setGeneratedCode,
        setOtpGeneratedAt,
        otpGeneratedAt,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        name,
        setName,
        isSubmitting,
        setIsSubmitting
    } = useRegisterContext();
    const t = useTranslations("Auth");

    /**
     * 1. Handle input changes
     */
    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);
    const handlePhoneChange = (phone: string) => setPhone(phone);
    const handleNameChange = (name: string) => setName(name);

    /**
     * 2. Validate inputs
     * Checks if all fields are filled and optionally validates formats (email, password, phone).
     */
    const handleValidateInput = () => {
        if (!email || !password || !phone || !name) {
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

        if (!/^\d{10}$/.test(phone)) {
            handleError(t("validPhone"));
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
     * 3. Check if the user already exists
     * Replace this with your actual API logic.
     */
    const checkUserExist = async () => {
        try {
            console.log("Checking if user exists...");
            // Simulate API logic
            const userExists = false; // Replace with actual API response
            if (userExists) {
                handleError(t("userExisted"));
                return false;
            }
            return true;
        } catch (error) {
            handleError(t("unexpected_error"));
            return false;
        }
    };

    /**
     * 4. Generate and send OTP
     * Simulates OTP generation and sending logic.
     */
    const handleGenerateOTPandSend = async () => {
        const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
        const timestamp = Date.now();
        setGeneratedCode(generatedOTP);
        setOtpGeneratedAt(timestamp);

        console.log(`Generated Code: ${generatedOTP}, Timestamp: ${timestamp}`);
        setIsSubmitting(true);

        try {
            console.log(`Your OTP is: ${generatedOTP}. \nPlease don't share your OTP to anyone.`);
            setIsOTP(true);
        } catch (error) {
            handleError(t("unexpected_error"));
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * 5. Register new user
     * Combines all steps and validates before proceeding.
     */
    const handleRegisterNewUser = async (event: React.FormEvent) => {
        event.preventDefault();

        // Validate inputs
        if (!handleValidateInput()) return;

        // Check if user exists
        const userExists = await checkUserExist();
        if (!userExists) return;

        // Generate and send OTP
        await handleGenerateOTPandSend();
    };

    /**
     * Exposed hook values and methods
     */
    return {
        email,
        password,
        name,
        phone,
        isOTP,
        generatedCode,
        isSubmitting,
        handleEmailChange,
        handlePasswordChange,
        handlePhoneChange,
        handleNameChange,
        handleRegisterNewUser,
    };
}
