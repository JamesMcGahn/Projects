import React from 'react';
import MainNav from './nav/MainNav'
import TopNav from './nav/TopNav'

function layout(props) {
    return (
        <div>
            <TopNav />
            <MainNav />
            {props.children}
        </div>
    );
}

export default layout;