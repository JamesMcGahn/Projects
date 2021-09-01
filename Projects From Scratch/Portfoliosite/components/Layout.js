import React from 'react';
import MainNav from './MainNav'
import { useRouter } from 'next/router'
import classes from '../styles/layout.module.css'
import DashNav from './DashNav';
import Footer from './Footer'
function Layout({ children }) {
    const router = useRouter()
    return (
        <div>
            {router.pathname === '/dashboard' || router.pathname === '/projects/[id]/edit' || router.pathname === '/addproject'
                ? <DashNav /> : <MainNav />}
            {children}
            <Footer />
        </div>
    );
}

export default Layout;