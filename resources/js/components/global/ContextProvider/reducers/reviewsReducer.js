import _ from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {

  case 'REFRESH_REVIEW':
    return {
      ...state,
      update: state.update + 1
    };
  case 'SET_REVIEW_INDEX_RESULT':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      indexResult: {
        reviewIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  case 'SET_REVIEW_FACILITIES_SHOW_RESULT':
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      facilitiesShowResult: {
        reviewIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  case 'CLEAR_RESULTS':
    return {
      ...state,
      indexResult: {
        reviewIds: [],
        paginate: {}
      },
      facilitiesShowResult: {
        reviewIds: [],
        paginate: {}
      }
    };
  default:
    return state;
  }
};

export default reviewsReducer;