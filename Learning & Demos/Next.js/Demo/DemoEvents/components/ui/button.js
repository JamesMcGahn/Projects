import React from 'react';
import Link from 'next/link'
import classes from './button.module.css';

function button({ id, children, onClick }) {
    if (id) {
        return (
            <Link href={'/' + id}><a className={classes.btn}>{children}</a></Link>
        );
    }
    else {
        return (
            <button className={classes.btn} onClick={onClick}>{props.children}</button>
        );
    }

}

export default button;