import _ from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {

  case 'DELETE_REVIEW': {
    const id = action.data.id;
    const newState = {...state};
    delete newState.data[id];
    return newState;
  }
  case 'SET_REVIEWS': 
    console.log({
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      facilitiesShowResult: {
        ...state.facilitiesShowResult,
        reviewIds: [...action.data.map(o=>o.id), ...state.facilitiesShowResult.reviewIds]
      }
    });
    return {
      ...state,
      data: {
        ...state.data,
        ..._.keyBy(action.data, 'id')
      },
      facilitiesShowResult: {
        ...state.facilitiesShowResult,
        reviewIds: [...action.data.map(o=>o.id), ...state.facilitiesShowResult.reviewIds]
      }
    };
  case 'SET_REVIEWS_INDEX_RESULT':
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