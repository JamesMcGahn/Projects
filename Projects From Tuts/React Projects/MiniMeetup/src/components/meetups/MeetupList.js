import React from 'react';
import Meetupitem from './Meetupitem';
import classes from './MeetupList.module.css'


function MeetupList(props) {
    const { meetups } = props
    return (
        <ul className={classes.list}>
            {meetups.map((meetup) => <Meetupitem
                key={meetup.id} id={meetup.id}
                image={meetup.image} description={meetup.description}
                title={meetup.title} address={meetup.address}
            />)}
        </ul>
    );
}

export default MeetupList;