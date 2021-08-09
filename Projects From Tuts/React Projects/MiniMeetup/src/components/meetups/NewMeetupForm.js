import React from 'react';
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm(props) {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id='image' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='addresses'>Meetup Addresses</label>
                    <input type="text" required id='addresses' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required id='description' rows='5'></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Mettup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;