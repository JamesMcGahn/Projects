import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom'

function NewMeetupsPage(props) {
    const history = useHistory()
    const addMeetup = (newMeetup) => {
        fetch("https://react-meetup-418f5-default-rtdb.firebaseio.com/meetups.json",
            {
                method: 'POST',
                body: JSON.stringify(newMeetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history.replace('/')
            })
    }

    return (
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetup} />
        </section>
    );
}

export default NewMeetupsPage;