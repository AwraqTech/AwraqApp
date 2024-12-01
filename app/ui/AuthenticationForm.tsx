"use client"

import React from 'react'
import LoginForm from './LoginForm'
import useToggleAuth from '../hooks/useToggleAuth'
import RegisterForm from './RegisterForm';
import OTPVerifyForm from './OTPVerifyForm';
import { useRegisterContext } from '../context/RegisterContext';
import ForgetPasswordForm from './ForgetPasswordForm';
import { useTranslations } from 'next-intl';

export default function AuthenticationForm() {
    const {
        isLogin,
        toggleLogin,
        toggleRegister
    } = useToggleAuth();
    const { isOTP } = useRegisterContext();
    const { isForgetPassword } = useRegisterContext();
    const t = useTranslations("Auth");

    return (
        <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center w-full h-full lg:px-0 px-4 lg:mt-0 mt-10'>
            <div className='flex flex-col justify-center items-center w-full lg:p-10'>
                {/* Toggle Auth */}
                {isForgetPassword ? (
                    <ForgetPasswordForm />
                ) : (
                    <>
                        {!isOTP && (
                            <div className="flex justify-end mb-3 w-full max-w-xl">
                                <div
                                    id="toggle-count"
                                    className="p-1 rounded-xl dark:bg-[#111c2a] bg-[#f1f1f1] w-full flex"
                                >
                                    <label
                                        onClick={toggleLogin}
                                        className={`relative inline-block py-2 cursor-pointer rounded-lg flex-1 text-center ${isLogin ? 'dark:bg-[#071321] bg-white' : 'bg-transparent'
                                            }`}
                                    >
                                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                                            {t("login")}
                                        </span>
                                    </label>
                                    <label
                                        onClick={toggleRegister}
                                        className={`relative inline-block py-2 cursor-pointer rounded-lg flex-1 text-center ${!isLogin ? 'dark:bg-[#071321] bg-white' : 'bg-transparent'
                                            }`}
                                    >
                                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                                            {t("register")}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}
                        {isOTP ? (
                            <OTPVerifyForm mode={isLogin ? 'login' : 'register'} />
                        ) : (
                            <>
                                {isLogin ? (
                                    <LoginForm />
                                ) : (
                                    <RegisterForm />
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
            <div className='lg:flex hidden flex-col gap-4 justify-center rounded-3xl items-center w-full lg:p-10 p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/bg-hero-light-gradient.png"),_url("/images/bg-hero-light-shadow.png")] dark:bg-[url("/images/bg-hero-dark-gradient.png"),_url("/images/bg-hero-dark-shadow.png")] h-full'>
                <h1 className='text-4xl font-bold'>{t("growth_heading")}</h1>
                <p className='text-gray-500 dark:text-gray-400 lg:text-right'>
                    {t("growth_description")}
                </p>
            </div>
        </div>
    )
}