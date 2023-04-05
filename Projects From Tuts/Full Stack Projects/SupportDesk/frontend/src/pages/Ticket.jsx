import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';
import { getTicket, reset } from '../features/tickets/ticketSlice';
import { useParams } from 'react-router-dom';

function Ticket() {
  const { ticket, isLoading, isSuccess } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getTicket(params.ticketId));
    return () => {
      if (isSuccess) {
        reset();
      }
    };
  }, [dispatch, isSuccess, params.ticketId]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>{ticket.status}</span>
        </h2>
        <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  );
}
export default Ticket;
