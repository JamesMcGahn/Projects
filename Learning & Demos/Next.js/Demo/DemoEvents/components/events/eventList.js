import React from 'react';
import EventItem from './item';
import classes from './eventlist.module.css';

function EventList({ events }) {
    return (
        <ul className={classes.list}>
            {events.map(item => {
                return <EventItem key={item.key}
                    date={item.date}
                    title={item.title} image={item.image}
                    location={item.location} id={item.id} />
            }
            )
            }
        </ul>
    );
}

export default EventList;