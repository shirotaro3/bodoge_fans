import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch(action.type) {

    // Authentication
    case 'LOGIN':
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...action.data,
            likes: action.data.likes.map(o=>o.facility_id),
          },
          isLoggedIn: true
        }
      }
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {},
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
    
    // ComponentVisibility
    case 'USER_MENU_OPEN':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          userMenu: true,
          facilityMenu: false,
          modal: false
        }
      }
    case 'FACILITY_MENU_OPEN':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          userMenu: false,
          facilityMenu: true,
          modal: false
        }
      }
    case 'MODAL_OPEN':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          userMenu: false,
          facilityMenu: false,
          modal: true
        },
        modalConfig: {
          // デフォルトはCONFIRM
          type: action.modalType || 'CONFIRM',
          title: action.title || '',
          body: action.body || '',
          callback: action.callback || function() { return; }
        }
      }
    case 'CLOSE_ALL':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          userMenu: false,
          facilityMenu: false,
          modal: false,
        }
      }
    case 'API_CALL_START':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          waiting: true
        }
      }
    case 'API_CALL_END':
      return {
        ...state,
        visibility: {
          ...state.visibility,
          waiting: false
        }
      }

    //  MasterData
    case 'SET_MASTERS':
      return {
        ...state,
        masters: {
          ...state.selectValues,
          facilityTypes: formatSelectValue(action.facilityTypes),
          budgets: formatSelectValue(action.budgets),
          scales: formatSelectValue(action.scales),
          prefectures: formatPrefecture(action.prefectures),
          services: formatService(action.services),
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
        },
      }
    
    // facilitiesのデータをオブジェクトで保持
    // data: array
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
    
    // likes
    // data: array
    case 'SET_LIKES':
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            likes: action.data.map(o=>o.facility_id),
          }
        }
      }

    // reviews
    // data: array
    case 'SET_REVIEW':
      {
        const facilityId = action.data.facility_id;
        const context = {...state};
        context.facilities.data[facilityId].reviews.push(
          {
            ...action.data
          });
        return context;
      }

    case 'DELETE_REVIEW':
      {
        const facilityId = action.data.facility_id;
        const id = action.data.id;
        const context = {...state};
        context.facilities.data[facilityId].reviews =
          context.facilities.data[facilityId].reviews.filter((o) => {
            return o.id !== id;
        });
        return context;
      }
  }
};

const formatSelectValue = (selectValueArr) => {
  return selectValueArr.map(v => {
    return { value: v.id, label: v.detail }
  });
};
const formatPrefecture = (prefectureArr) => {
  return prefectureArr.map(v => {
    return { value: v.id, label: v.name}
  });
};
const formatService = (serviceArr) => {
  return serviceArr.map(v => {
    return { value: v.id, label: v.detail, iconUrl: v.icon_url }
  });
};

export default reducer;