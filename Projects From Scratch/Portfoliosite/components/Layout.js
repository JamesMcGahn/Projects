import React from 'react';
import MainNav from './MainNav'
import { useRouter } from 'next/router'
import classes from '../styles/layout.module.css'
import DashNav from './DashNav';
function Layout({ children }) {
    const router = useRouter()
    return (
        <div>
            {router.pathname === '/dashboard' || router.pathname === '/projects/[id]/edit' ? <DashNav /> : <MainNav />}
            {children}
        </div>
    );
}

export default Layout;