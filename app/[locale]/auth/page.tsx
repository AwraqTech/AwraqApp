import AuthenticationForm from '@/app/ui/AuthenticationForm'
import Footer from '@/app/ui/Footer'
import Header from '@/app/ui/Header'
import SideBarMobileMenu from '@/app/ui/SideBarMobileMenu'
import React from 'react'

export default function Auth() {
    return (
        <div className='flex flex-col w-full h-screen'>
            <Header headerTitle=''/>
            <SideBarMobileMenu />
            <AuthenticationForm />
            <Footer />
        </div>
    )
}