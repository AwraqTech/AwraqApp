import React from "react";
import { useHandleErrors } from "../context/ErrorContext";
import { useRegisterContext } from "../context/RegisterContext";
import { useTranslations } from "next-intl";

export default function useForgetPassword() {
  const { handleError } = useHandleErrors();
  const { email, setEmail, isSubmitting, setIsSubmitting, setPasswordResetSuccess, setSuccessMessage } = useRegisterContext();
  const t = useTranslations("Auth");

  const handleEmailChange = (email: string) => setEmail(email);

  const handleValidateInput = (): boolean => {
    if (!email) {
      handleError(t("email_missing"));
      return false;
    }

    if (!validateEmail(email)) {
      handleError(t("invalidEmail"));
      return false;
    }

    return true;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUserExist = async () => {
    try {
      console.log("Checking if user exists...");
      // Simulate API logic
      const userExists = true; // Replace with actual API response
      if (userExists) {
        setPasswordResetSuccess(true);
        setSuccessMessage(t("success_message"));
        console.log("User exists, proceed to send email");
        return true;
      }
      handleError(t("user_not_found"));
      return false;
    } catch (error) {
      handleError(t("unexpected_error"));
      return false;
    }
  };

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!handleValidateInput()) return;

    const userExists = await checkUserExist();
    if (!userExists) return;

    try {
      setIsSubmitting(true);
      // Simulate API call to send reset password email
      console.log("Password reset email sent successfully");
    } catch (error) {
      console.error(error);
      handleError(t("error_message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    handleEmailChange,
    handleResetPassword,
    isSubmitting,
  };
}
