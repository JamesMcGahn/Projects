import React from 'react';
import MainNav from './MainNav'
function Layout({ children }) {
    return (
        <div>
            <MainNav />
            {children}
        </div>
    );
}

export default Layout;