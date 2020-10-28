const noticeReducer = (state = {}, action) => {
  switch (action.type) {
    
  case 'ALERT':
    return {
      ...state,
      text: `エラー：${action.text}`,
      isShow: true,
      type: 'ALERT',
      color: '#f55'
    };
  case 'MESSAGE':
    return {
      ...state,
      text: action.text,
      isShow: true,
      type: 'MESSAGE',
      color: '#fff'
    };
  case 'HIDE_NOTICE':
    return {
      ...state,
      isShow: false,
    };
  default:
    return state;
  }
};

export default noticeReducer;