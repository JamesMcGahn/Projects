import React from 'react';

import { useRouter } from 'next/router'

import { getEventById } from '../../../dummy-data'
import EventSummary from '../../../components/event-detail/event-summary'
import EventLogistics from '../../../components/event-detail/event-logistics'
import EventContent from '../../../components/event-detail/event-content'
function EventsDetail(props) {
    const router = useRouter()
    const eventId = router.query.eventsid
    const event = getEventById(eventId)


    if (!event) return <p>sorry cant find that page</p>
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} alt={event.title} image={event.image} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}

export default EventsDetail