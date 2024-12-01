"use client";

import { useState } from "react";
import useValidateOTP from "./useValidateOTP";
import { useRegisterContext } from "../context/RegisterContext";
import { useHandleErrors } from "../context/ErrorContext";
import useLogin from "./useLogin";
import { useTranslations } from "next-intl";

export default function useOTPVerify() {
    const [otp, setOtp] = useState<string>("");
    const { validateOTPCode } = useValidateOTP();
    const {
        email,
        password,
        phone,
        name,
        generatedCode,
        otpGeneratedAt
    } = useRegisterContext();
    const { handleError } = useHandleErrors();
    const t = useTranslations("Auth");

    const handleOTPChange = (newOtp: string) => {
        setOtp(newOtp);
    };

    const validateOTPExpiry = () => {
        if (!otpGeneratedAt) return false;
        const now = Date.now();
        const timeElapsed = (now - otpGeneratedAt) / 1000;
        return timeElapsed < 300;
    };

    const handleOTPVerify = (): boolean => {
        if (!validateOTPCode(otp)) return false;

        if (!validateOTPExpiry()) {
            handleError(t("OTPExpire"));
            return false;
        }

        if (otp !== generatedCode) {
            handleError(t("otpMismatch"));
            return false;
        }

        console.log("OTP verified successfully");
        return true;
    };

    // Finalize action based on the mode
    const finalizeAction = async (mode: "register" | "login") => {
        if (!handleOTPVerify()) return;

        try {
            if (mode === "register") {
                // Registration logic
                console.log(
                    `User registered successfully. Email: ${email}, Phone: ${phone}, Name: ${name}`
                );

            } else if (mode === "login") {
                // Login logic
                console.log(`User logged in successfully. Email: ${email}, Password: ${password}`);
            }
        } catch (error) {
            console.error(`Error during ${mode} process:`, error);
            handleError(`${t("errorOuccurred")} ${mode === "register" ? t("register") : t("login")}`);
        }
    };

    return {
        otp,
        handleOTPChange,
        finalizeAction,
    };
}
