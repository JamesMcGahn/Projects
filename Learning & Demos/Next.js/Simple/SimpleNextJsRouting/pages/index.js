import React from 'react';
import Link from 'next/link'
function HomePage(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/clients'>clients</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;