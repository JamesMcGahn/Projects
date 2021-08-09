import React, { useRef } from 'react';
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm(props) {
    const titleInput = useRef()
    const imageInput = useRef()
    const addressInput = useRef()
    const textInput = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const enteredTitle = titleInput.current.value
        const enteredImage = imageInput.current.value
        const enteredAddress = addressInput.current.value
        const enteredText = textInput.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredText,
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id='title' ref={imageInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id='image' ref={addressInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='addresses'>Meetup Addresses</label>
                    <input type="text" required id='addresses' ref={titleInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required id='description' rows='5' ref={textInput}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Mettup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;