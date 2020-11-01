const authReducer = (state = {}, action) => {
  switch (action.type) {
  // Authentication
  case 'LOGIN':
    return {
      ...state,
      user: {
        ...action.data,
        likes: action.data.likes.map(o=>o.facility_id),
      },
      isLoggedIn: true
    };
  case 'LOGOUT':
    return {
      ...state,
      user: {},
      isLoggedIn: false
    };
  case 'AUTH_INIT':
    return {
      ...state,
      initialized: true
    };
  
  case 'SET_LIKES':
    return {
      ...state,
      user: {
        ...state.user,
        likes: action.data.map(o=>o.facility_id),
      },
    };

  default:
    return state;
  }
};

export default authReducer;