import React from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

function Meetupitem(props) {
    const { image, description, title, address } = props;
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                </div>
            </li>
        </Card>
    );
}

export default Meetupitem;