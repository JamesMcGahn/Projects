import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { toast } from 'react-toastify';
import { getTicket, closeTicket, reset } from '../features/tickets/ticketSlice';
import { useParams, useNavigate } from 'react-router-dom';

function Ticket() {
  const { ticket, isLoading, isSuccess } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTicket(params.ticketId));
    return () => {
      if (isSuccess) {
        reset();
      }
    };
  }, [dispatch, isSuccess, params.ticketId]);

  const onCloseTicket = () => {
    dispatch(closeTicket(params.ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

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
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      {ticket.status !== 'closed' && (
        <button onClick={onCloseTicket} className="btn btn-block btn-danger">
          Close Ticket
        </button>
      )}
    </div>
  );
}
export default Ticket;
