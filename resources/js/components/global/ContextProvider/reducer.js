import _ from 'lodash';

const formatSelectValue = (selectValueArr) => {
  selectValueArr.map(v => {
    return { value: v.id, label: v.detail }
  });
};

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
    case 'SET_SELECT_VALUES':
      return {
        ...state,
        selectValues: {
          ...state.selectValues,
          facilityTypes: formatSelectValue(action.facilityTypes),
          budgets: formatSelectValue(action.budgets),
          scales: formatSelectValue(action.scales),
          prefectures: formatSelectValue(action.prefectures),
          resolved: true
        }
      }

    // facilitiesPickup
    case 'SET_FACILITY_PICKUP':
      return {
        ...state,
        pickedUpFacilitiesId: {
          ...state.pickedUpFacilitiesId,
          data: action.data.map(v => v.id),
          resolved: true
        },
        facilities: {
          ...state.facilities,
          data: {
            ...state.facilities.data,
            ..._.keyBy(action.data, 'id')
          }
        }
      }
    
    // facilitiesのデータをオブジェクトで保持
    case 'SET_FACILITIES':
      return {
        ...state,
        facilities: {
          ...state.facilities,
          data: {
            ...state.facilities.data,
            ..._.keyBy(action.data, 'id')
          }
        }
      }
  }
};

export default reducer;