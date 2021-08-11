import React from 'react';
import classes from './item.module.css';
import Button from '../ui/button'

import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'

function EventItem(props) {
    const { title, image, date, location, id } = props
    const formatDate = new Date(date).toLocaleDateString('en-US',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    const formattedAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formatDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button id={id}>
                        <span>Check this event out</span>
                        <span className={classes.icon}><ArrowRightIcon /></span></Button>
                </div>
            </div>
        </li>
    );
}


export default EventItem;