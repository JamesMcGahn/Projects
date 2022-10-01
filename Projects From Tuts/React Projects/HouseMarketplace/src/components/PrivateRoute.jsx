import { Navigate } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute({ children }) {
  const { loggedIn, checking } = useAuthStatus();

  if (checking) {
    return <Spinner />;
  }
  return loggedIn ? children : <Navigate to="/sign-in" />;
}
export default PrivateRoute;
