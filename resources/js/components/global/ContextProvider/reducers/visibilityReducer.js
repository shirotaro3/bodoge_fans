const visibilityReducer = (state = {}, action) => {
  switch (action.type) {
  // ComponentsVisibility
  case 'USER_MENU_OPEN':
    return {
      ...state,
      userMenu: true,
      facilityMenu: false,
      modal: false
    };
  case 'FACILITY_MENU_OPEN':
    return {
      ...state,
      userMenu: false,
      facilityMenu: true,
      modal: false
    };
  case 'MODAL_OPEN':
    return {
      ...state,
      userMenu: false,
      facilityMenu: false,
      modal: true,
      modalConfig: {
        // CONFIRM, IMAGE_UPLOADが利用可能
        type: action.modalType || 'CONFIRM',
        title: action.title || '',
        body: action.body || '',
        callback: action.callback || function() { return; }
      }
    };
  case 'CLOSE_ALL':
    return {
      ...state,
      userMenu: false,
      facilityMenu: false,
      modal: false,
    };
  case 'API_CALL_START':
    return {
      ...state,
      waiting: state.waiting + 1
    };
  case 'API_CALL_END':
    return {
      ...state,
      waiting: state.waiting - 1
    };
  default:
    return state;
  }
};

export default visibilityReducer;