import { useState } from 'react'

export default function useToggleAuth() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const toggleLogin = () => {
        setIsLogin(true);
    };

    const toggleRegister = () => {
        setIsLogin(false);
    }

    return{
        isLogin,
        toggleLogin,
        toggleRegister
    }
}