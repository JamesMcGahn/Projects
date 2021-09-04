import React from 'react';
import MainNav from './nav/MainNav'
import { useRouter } from 'next/router'
import classes from '../../styles/layout.module.css'
import DashNav from './nav/DashNav';
import Footer from './Footer'
import { useSession } from "next-auth/client"
function Layout({ children }) {
    const [session, loading] = useSession()
    const router = useRouter()
    return (
        <>
            {session
                ? <DashNav /> : null}
            <div>
                {router.pathname === '/dashboard' || router.pathname === '/dashboard/addproject' ||
                    router.pathname === '/projects/[id]/edit' || router.pathname === '/projects/[id]/images' ?
                    null :
                    <MainNav />
                }
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;

