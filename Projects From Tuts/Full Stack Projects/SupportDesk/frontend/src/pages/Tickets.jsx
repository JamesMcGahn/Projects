import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';
import { getTickets, reset } from '../features/tickets/ticketSlice';

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());

    return () => {
      if (isSuccess) {
        reset();
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div>Description</div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}
export default Tickets;
