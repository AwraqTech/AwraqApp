import React from "react";
import SubmittingButton from "../components/SubmittingButton";
import OTPInput from "../components/OTPInput";
import useOTPVerify from "../hooks/useOTPVerify";
import FailureToast from "../components/FailureToast";
import { useHandleErrors } from "../context/ErrorContext";
import { useTranslations } from "next-intl";
import useResendOTP from "../hooks/useResendOTP";

interface OTPVerifyFormProps {
    mode: "register" | "login"; // Determine whether to register or login
}

export default function OTPVerifyForm({ mode }: OTPVerifyFormProps) {
    const { handleOTPChange, finalizeAction } = useOTPVerify();
    const { isError, errorMessage } = useHandleErrors();
    const { isResended, resendTime, handleResendOTP } = useResendOTP();
    const t = useTranslations("Auth");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        finalizeAction(mode); // Pass the mode to finalizeAction
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 w-full max-w-xl rounded-xl"
        >
            <label
                htmlFor="otp"
                className="block text-sm font-medium mb-2 dark:text-white"
            >
                {t("otpSent")}
            </label>
            <OTPInput length={4} onChange={handleOTPChange} />
            <SubmittingButton isSubmitting={false} title={t("OTPValidate")} />
            {isResended ? (
                <div className="text-gray-500 dark:text-gray-400">
                    {t("timeRemainToResend")}{" "}
                    <span className="text-black dark:text-white">
                        {resendTime}
                    </span>
                </div>
            ) : (
                <div className="text-gray-500 dark:text-gray-400">
                    {t("OTPNotSend")}{" "}
                    <button
                        onClick={handleResendOTP}
                        className="hover:underline text-black dark:text-white"
                    >
                        {t("resendOTP")}
                    </button>
                </div>
            )}
            {isError && <FailureToast title={t("error_heading")} message={errorMessage} />}
        </form>
    );
}
