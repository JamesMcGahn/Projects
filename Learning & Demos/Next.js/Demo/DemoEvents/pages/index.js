import React from 'react';
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/eventList'

function HomePage(props) {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <EventList events={featuredEvents} />
        </div>
    );
}

export default HomePage;