"use client";

import { useTranslations } from "next-intl";
import { useHandleErrors } from "../context/ErrorContext";

export default function useValidateOTP() {
  const { handleError } = useHandleErrors();
  const t = useTranslations("Auth");

  // Validate OTP input length
  const validateOTPCode = (otp: string): boolean => {
    if (otp.length < 4) {
      handleError(t("otpValidationError"));
      return false;
    }
    return true;
  };

  return { validateOTPCode };
}
