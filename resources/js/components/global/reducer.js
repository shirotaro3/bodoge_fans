const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: {
          name: action.name,
          isLoggedIn: true
        }
      }
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          name: null,
          isLoggedIn: false
        }
      }
  }
};

export default reducer;