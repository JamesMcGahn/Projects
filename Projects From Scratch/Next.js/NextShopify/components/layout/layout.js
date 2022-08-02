import React from 'react';
import MainNav from './nav/MainNav'
import TopNav from './nav/TopNav'
import Footer from '../layout/Footer'

function layout(props) {
    return (
        <div>
            <TopNav />
            <MainNav />
            {props.children}
            <Footer />
        </div>
    );
}

export default layout;