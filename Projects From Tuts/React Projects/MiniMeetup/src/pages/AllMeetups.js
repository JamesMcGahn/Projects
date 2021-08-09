import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage(props) {
    const [loading, setLoading] = useState(true)
    const [meetups, setMeetups] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("https://react-meetup-418f5-default-rtdb.firebaseio.com/meetups.json",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            }).then((data) => {
                const meetupData = []
                for (const key in data) {
                    const meet = {
                        id: key,
                        ...data[key],
                    }
                    meetupData.push(meet)
                }


                setLoading(false)
                setMeetups(meetupData)
            })
        if (loading) {
            return (
                <section>
                    < p > loading...</p >
                </section >)
        }
    }, [])

    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={meetups} />
            </ul>
        </section>
    )
}

export default AllMeetupsPage;