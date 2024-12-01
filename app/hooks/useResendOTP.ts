import React, { useState } from 'react';
import { useHandleErrors } from '../context/ErrorContext';
import { useTranslations } from 'next-intl';
import { useRegisterContext } from '../context/RegisterContext';

export default function useResendOTP() {
    const [isResended, setIsResended] = useState<boolean>(false);
    const [resendTime, setResendTime] = useState<number>(0);
    const { handleError } = useHandleErrors();
    const t = useTranslations("Auth");
    const { generatedCode, setGeneratedCode, setOtpGeneratedAt } = useRegisterContext();

    const startTimerTwoMinutes = () => {
        const totalTime = 120;
        setResendTime(totalTime);
        setIsResended(true);

        const timer = setInterval(() => {
            setResendTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setIsResended(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const handleResendOTP = async () => {
        try {
            startTimerTwoMinutes();
            const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
            setGeneratedCode(generatedOTP);
            setOtpGeneratedAt(Date.now());

            // Here is the logic to send SMS
            console.log(`Verified code has been resend, OTP is: ${generatedCode}`);
        } catch (error) {
            handleError(t("unexpected_error"));
        }
    };

    return { isResended, resendTime, handleResendOTP };
}
