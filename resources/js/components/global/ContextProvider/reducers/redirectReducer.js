const redirectReducer = (state = {}, action) => {
  switch (action.type) {

  case 'REDIRECT':
    return {
      ...state,
      path: action.to,
    };
  case 'REDIRECT_OK':
    return {
      ...state,
      path: ''
    };
  default:
    return state;
  }
};

export default redirectReducer;