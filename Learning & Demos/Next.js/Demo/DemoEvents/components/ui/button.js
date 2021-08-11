import React from 'react';
import Link from 'next/link'
import classes from './button.module.css';

function button({ id, children }) {
    return (
        <Link href={'/' + id}><a className={classes.btn}>{children}</a></Link>
    );
}

export default button;