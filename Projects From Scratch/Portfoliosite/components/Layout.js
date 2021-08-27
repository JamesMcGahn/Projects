import React from 'react';
import MainNav from './MainNav'
import classes from '../styles/layout.module.css'
function Layout({ children }) {
    return (
        <div>
            <MainNav />
            {children}
        </div>
    );
}

export default Layout;