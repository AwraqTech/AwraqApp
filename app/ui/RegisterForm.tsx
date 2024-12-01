import React from 'react'
import SubmittingButton from '../components/SubmittingButton'
import useRegister from '../hooks/useRegister'
import FailureToast from '../components/FailureToast';
import { useHandleErrors } from '../context/ErrorContext';
import { useTranslations } from 'next-intl';

export default function RegisterForm() {
  const {
    email,
    password,
    name,
    phone,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    handlePhoneChange,
    handleNameChange,
    handleRegisterNewUser
  } = useRegister();

  const { isError, errorMessage } = useHandleErrors();
  const t = useTranslations("Auth");

  return (
    <form onSubmit={handleRegisterNewUser} className='flex flex-col gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 w-full max-w-xl rounded-xl'>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
        {t("name_label")}
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("name_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-id-card-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
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
        {t("phone_label")}
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="tel"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("phone_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-phone-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
          {t("password_label")}
        </label>
        <div className="relative" dir='ltr'>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#ffffff] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
            placeholder={t("password_placeholder")}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <i className='ri-lock-password-line text-lg text-neutral-400 dark:text-neutral-500' />
          </div>
        </div>
      </div>
      <SubmittingButton isSubmitting={isSubmitting} title={t("register_submit")}/>
      <p className='text-gray-500 dark:text-gray-400'>
      {t("by_creating_account")} <a href='https://awraq.tech/ar/privacy' className='hover:underline'>{t("privacy_policy")}</a>
      </p>
      {isError && (
        <FailureToast title={t("error_heading")} message={errorMessage} />
      )}
    </form>
  )
}