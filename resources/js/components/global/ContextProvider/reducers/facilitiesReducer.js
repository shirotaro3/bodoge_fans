import _ from 'lodash';

const facilitiesReducer = (state = {}, action) => {
  switch (action.type) {
  // facilitiesのデータをオブジェクトで保持
  case 'SET_FACILITIES':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
    };
  case 'DELETE_FACILITY': {
    const newState = {...state};
    // ピックアップから削除する TODO:ピックアップを再取得する仕組み。
    const index = newState.pickedUpResult.facilityIds.indexOf(Number(action.id));
    if (index > -1) {
      newState.pickedUpResult.facilityIds.splice(index, 1);
    }
    delete newState.data[action.id];
    return newState;
  }
  // 検索結果
  case 'SET_FACILITY_SEARCH_RESULT':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      searchResult: {
        facilityIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  // ユーザーのいいね一覧
  case 'SET_FACILITY_USERS_LIKE_RESULT':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      usersLikeResult: {
        facilityIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  // いいねがセットされたタイミングでいいね取得結果をリセット
  case 'SET_LIKES':
    return {
      ...state
    };
  // ユーザーの所有するFacilityの一覧
  case 'SET_FACILITY_USERS_MINE_RESULT':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      usersMineResult: {
        facilityIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  // ピックアップの一覧
  case 'SET_FACILITY_PICKUP':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      pickedUpResult: {
        ...state.pickedUpResult,
        facilityIds: action.data.map(v => v.id),
        resolved: true
      },
    };

  // facilityTimeの更新
  case 'SET_FACILITY_TIME': {
    const newState = {...state};
    const facilityId = action.data.facility_id;
    newState.data[facilityId].facility_time = action.data;
    return newState;
  }

  case 'CLEAR_RESULTS':
    return {
      ...state,
      usersLikeResult: {
        facilityIds: [],
        paginate: {}
      },
      usersMineResult: {
        facilityIds: [],
        paginate: {}
      },
      searchResult: {
        facilityIds: [],
        paginate: {}
      }
    };
  default:
    return state;
  }
};

export default facilitiesReducer;