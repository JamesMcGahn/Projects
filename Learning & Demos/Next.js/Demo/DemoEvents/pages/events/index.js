import React from 'react';
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/eventList'
import EventsSearch from '../../components/events/eventsSearch'
function AllEventsPage(props) {
    const events = getAllEvents()

    return (
        <div>
            <EventsSearch />
            <EventList events={events} />
        </div>
    );
}

export default AllEventsPage;