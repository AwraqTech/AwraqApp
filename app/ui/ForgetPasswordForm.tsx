import React from "react";
import SubmittingButton from "../components/SubmittingButton";
import useForgetPassword from "../hooks/useForgetPassword";
import { useHandleErrors } from "../context/ErrorContext";
import FailureToast from "../components/FailureToast";
import { useRegisterContext } from "../context/RegisterContext";
import SuccessToast from "../components/SuccessToast";
import { useTranslations } from "next-intl";

export default function ForgetPasswordForm() {
  const { handleEmailChange, handleResetPassword, email, isSubmitting } =
    useForgetPassword();
  const { isError, errorMessage } = useHandleErrors();
  const { passwordResetSuccess, successMessage } = useRegisterContext();
  const t = useTranslations("Auth");

  return (
    <form
      onSubmit={handleResetPassword}
      className="flex flex-col gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 w-full max-w-xl rounded-xl"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          {t("email_label")}
        </label>
        <div className="relative" dir="ltr">
          <input
            type="text"
            value={email}
            id="email"
            name="email"
            onChange={(e) => handleEmailChange(e.target.value)}
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("email_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className="ri-mail-line text-lg text-neutral-400 dark:text-neutral-500" />
          </div>
        </div>
      </div>
      <div className="py-3 flex items-center text-xs text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">{t("recover_password_label")}</div>
      {isError && (
        <FailureToast title={t("error_heading")} message={errorMessage} />
      )}
      {passwordResetSuccess && (
        <SuccessToast title={t("success_heading")} message={successMessage} />
      )}
      <SubmittingButton isSubmitting={isSubmitting} title={t("recover_password")} />
    </form>
  );
}
