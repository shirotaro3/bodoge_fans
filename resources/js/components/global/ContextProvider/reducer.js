const reducer = (state = {}, action) => {
  switch(action.type) {

    // Authentication
    case 'LOGIN':
      return {
        ...state,
        auth: {
          ...state.auth,
          name: action.name,
          isLoggedIn: true
        }
      }
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          ...state.auth,
          name: null,
          isLoggedIn: false
        }
      }
    case 'AUTH_INITIALIZED':
      return {
        ...state,
        auth: {
          ...state.auth,
          initialized: true
        }
      }

    // Router
    case 'REDIRECT':
      return {
        ...state,
        redirect: {
          path: action.to,
        }
      }
    case 'REDIRECT_OK':
      return {
        ...state,
        redirect: {
          path: ''
        }
      }

    // Notification
    case 'ALERT':
      return {
        ...state,
        notice: {
          text: `エラー：${action.text}`,
          isShow: true,
          type: 'ALERT',
          color: '#f55'
        }
      }
    case 'MESSAGE':
      return {
        ...state,
        notice: {
          text: action.text,
          isShow: true,
          type: 'MESSAGE',
          color: '#fff'
        }
      }
    case 'HIDE_NOTICE':
      return {
        ...state,
        notice: {
          ...state.notice,
          isShow: false,
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
    
    // selectValue
    case 'GET_SELECT_VALUES_OK':
      return {
        ...state,
        selectValues: {
          ...state.selectValues,
          ...action.values,
          resolved: true
        }
      }

    // facilitiesPickup
    case 'GET_FACILITY_PICKUP_OK':
      return {
        ...state,
        facilityPickup: {
          ...state.facilityPickup,
          data: action.data,
          resolved: true
        }
      }
  }
};

export default reducer;