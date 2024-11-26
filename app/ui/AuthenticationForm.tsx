"use client"

import React from 'react'
import LoginForm from './LoginForm'
import useToggleAuth from '../hooks/useToggleAuth'
import RegisterForm from './RegisterForm';

export default function AuthenticationForm() {
    const {
        isLogin,
        toggleLogin,
        toggleRegister
    } = useToggleAuth();

    return (
        <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center w-full h-full lg:px-0 px-4'>
            <div className='flex flex-col justify-center items-center w-full lg:p-10'>
                {/* Toggle Auth */}
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
                                تسجيل الدخول
                            </span>
                        </label>
                        <label
                            onClick={toggleRegister}
                            className={`relative inline-block py-2 cursor-pointer rounded-lg flex-1 text-center ${!isLogin ? 'dark:bg-[#071321] bg-white' : 'bg-transparent'
                                }`}
                        >
                            <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                                إنشاء حساب
                            </span>
                        </label>
                    </div>
                </div>

                {isLogin ? (
                    <LoginForm />
                ) : (
                    <RegisterForm />
                )}

            </div>
            <div className='lg:flex hidden flex-col justify-center rounded-3xl items-center w-full lg:p-10 p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/bg-hero-light-gradient.png"),_url("/images/bg-hero-light-shadow.png")] dark:bg-[url("/images/bg-hero-dark-gradient.png"),_url("/images/bg-hero-dark-shadow.png")] h-full'>

            </div>
        </div>
    )
}