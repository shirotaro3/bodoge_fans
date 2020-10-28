import _ from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {

  case 'SET_REVIEWS_INDEX_RESULT': {
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      indexResult: {
        ...state.indexResult,
        reviewIds: action.data.map(o=>o.id),
        paginate: action.paginate
      }
    };
  }

  default:
    return state;
  }
};

export default reviewsReducer;