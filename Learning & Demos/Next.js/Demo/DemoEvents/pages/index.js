import React from 'react';
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/eventList'

function HomePage(props) {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <h1>Home Page</h1>
            <EventList events={featuredEvents} />
        </div>
    );
}

export default HomePage;