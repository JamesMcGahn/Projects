import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage(props) {
    return (
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm />
        </section>
    );
}

export default NewMeetupsPage;