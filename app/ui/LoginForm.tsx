import React from 'react'
import SubmittingButton from '../components/SubmittingButton'
import useLogin from '../hooks/useLogin'
import FailureToast from '../components/FailureToast';
import { useHandleErrors } from '../context/ErrorContext';
import { useRegisterContext } from '../context/RegisterContext';
import { useTranslations } from 'next-intl';
import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';

export default function LoginForm() {
  const {
    email,
    password,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    handleLoginUser,
  } = useLogin();

  const { isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
  const { isError, errorMessage } = useHandleErrors();
  const { setIsForgetPassword } = useRegisterContext();
  const t = useTranslations("Auth");

  return (
    <form onSubmit={handleLoginUser} className='flex flex-col gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 w-full max-w-xl rounded-xl'>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t("email_label")}
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="text"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("email_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-mail-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t("password_label")}
        </label>
        <div className="relative" dir="ltr">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("password_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className="ri-lock-password-line text-lg text-neutral-400 dark:text-neutral-400" />
          </div>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-neutral-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:focus:text-blue-500"
          >
            {isPasswordVisible ? (
              <i className="ri-eye-line text-neutral-400 dark:text-neutral-400"></i>
            ) : (
              <i className="ri-eye-off-line text-neutral-400 dark:text-neutral-400"></i>
            )}
          </button>
        </div>
      </div>
      <SubmittingButton isSubmitting={isSubmitting} title={t("login_submit")} />
      <div className="py-3 flex items-center text-xs text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">{t("forgot_password")}</div>
      <p className='text-gray-500 dark:text-gray-400 text-center'>
        {t("forgot_password")} {' '} <button onClick={() => setIsForgetPassword(true)} className='hover:underline text-black dark:text-white'>{t("recover_password")}</button>
      </p>
      {isError && (
        <FailureToast title={t("error_heading")} message={errorMessage} />
      )}
    </form>
  )
}