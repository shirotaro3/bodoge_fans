import _ from 'lodash';

const facilitiesReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_FACILITY_PICKUP':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      pickedUpFacilitiesId: {
        ...state.pickedUpFacilitiesId,
        data: action.data.map(v => v.id),
        resolved: true
      },
    };

  // facilitiesのデータをオブジェクトで保持
  // data: array
  case 'SET_FACILITIES':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      myFacilitiesResults: {}
    };
  case 'DELETE_FACILITY': {
    const newState = {...state};
    // ピックアップから削除する TODO:ピックアップを再取得する仕組み。
    const index = newState.pickedUpFacilitiesId.data.indexOf(Number(action.id));
    if (index > -1) {
      newState.pickedUpFacilitiesId.data.splice(index, 1);
    }
    delete newState.data[action.id];
    return {
      ...newState,
      myFacilitiesResults: {},
      reviewsIndexResults: {},
    };
  }
  // 検索結果の保持
  case 'SET_FACILITIES_SEARCH_RESULT': {
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
  }
  // ユーザーのいいね取得結果
  case 'SET_USER_LIKES_RESULT':
  {
    const newState = {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      }
    };
    const propertyName = action.page;
    newState.likedFacilityResults[propertyName] = {
      result: action.result,
      paginate: action.paginate
    };
    return newState;
  }
  // いいねがセットされたタイミングでいいね取得結果をリセット
  case 'SET_LIKES':
    return {
      ...state,
      likedFacilityResults: {}
    };
  // ユーザーの所有するFacilityの一覧
  case 'SET_MY_FACILITIES_RESULTS':
  {
    const newState = {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      }
    };
    const propertyName = action.page;
    newState.myFacilitiesResults[propertyName] = {
      result: action.result,
      paginate: action.paginate
    };
    return newState;
  }

  // facilityTimeの更新
  case 'SET_FACILITY_TIME': {
    const newState = {...state};
    const facilityId = action.data.facility_id;
    newState.data[facilityId].facility_time = action.data;
    return newState;
  }
  default:
    return state;
  }
};

export default facilitiesReducer;