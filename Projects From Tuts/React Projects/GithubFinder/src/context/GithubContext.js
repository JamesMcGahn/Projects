import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: 'GET_USERS', payload: data.items });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers, dispatch }}>{children}</GithubContext.Provider>;
};

export default GithubContext;
