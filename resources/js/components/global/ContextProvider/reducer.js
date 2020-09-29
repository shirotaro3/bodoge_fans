const reducer = (state = {}, action) => {
  switch(action.type) {

    // Authentication
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

    // Notice
    case 'ALERT':
      return {
        ...state,
        notice: {
          text: action.text,
          isShow: true,
          type: 'ALERT'
        }
      }
    case 'MESSAGE':
      return {
        ...state,
        notice: {
          text: action.text,
          isShow: true,
          type: 'MESSAGE'
        }
      }
    case 'HIDE_NOTICE':
      return {
        ...state,
        notice: {
          text: state.notice.text,
          isShow: false,
          type: state.notice.type
        }
      }

    // Tracking
    case 'SET_AFTER_LOGIN_PATH':
      return {
        ...state,
        tracking: {
          afterLoginPath: action.path
        }
      }
  }
};

export default reducer;