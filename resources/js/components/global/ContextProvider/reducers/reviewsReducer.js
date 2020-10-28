import _ from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {

  case 'SET_REVIEWS_INDEX_RESULT': {
    const newState = {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      }
    };
    const propertyName = action.page;
    newState.reviewsIndexResults[propertyName] = {
      result: action.result,
      paginate: action.paginate
    };
    return newState;
  }

  default:
    return state;
  }
};

export default reviewsReducer;