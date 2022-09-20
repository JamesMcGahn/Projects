const githubReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CLEAR_USERS':
      return { ...state, loading: false, users: [] };

    default:
      return state;
  }
};

export default githubReducer;
