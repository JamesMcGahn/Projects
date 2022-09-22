import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const data = await res.json();

    dispatch({ type: 'GET_USERS', payload: data.items });
  };

  const searchUser = async (login) => {
    if (login === '') {
      return;
    }
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.state === 404) {
      window.location = '/notfound';
      return;
    }

    const data = await res.json();
    dispatch({ type: 'GET_USER', payload: data });
  };
  const searchUserRepo = async (login) => {
    if (login === '') {
      return;
    }
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}/repos`);

    if (res.state === 404) {
      window.location = '/notfound';
      return;
    }

    const data = await res.json();
    dispatch({ type: 'GET_REPOS', payload: data });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, loading: state.loading, searchUsers, searchUser, searchUserRepo, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
