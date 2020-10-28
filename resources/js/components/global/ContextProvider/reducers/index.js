import authReducer from './authReducer';
import facilitiesReducer from './facilitiesReducer';
import reviewsReducer from './reviewsReducer';
import mastersReducer from './mastersReducer';
import visibilityReducer from './visibilityReducer';
import redirectReducer from './redirectReducer';
import noticeReducer from './noticeReducer';

const rootReducer = (state = {}, action) => {
  return {
    auth: authReducer(state.auth, action),
    facilities: facilitiesReducer(state.facilities, action),
    reviews: reviewsReducer(state.reviews, action),
    masters: mastersReducer(state.masters, action),
    visibility: visibilityReducer(state.visibility, action),
    redirect: redirectReducer(state.redirect, action),
    notice: noticeReducer(state.notice, action),
  };

  
  // likes
  // data: array

  // // reviews
  // case 'SET_REVIEW': {
  //   const facilityId = action.data.facility_id;
  //   const newState = {
  //     ...state,
  //     reviewsIndexResults: {}
  //   };
  //   newState.facilities.data[facilityId].reviews.push(
  //     {
  //       ...action.data
  //     });
  //   return newState;
  // }

  // case 'DELETE_REVIEW': {
  //   const facilityId = action.data.facility_id;
  //   const id = action.data.id;
  //   const newState = {
  //     ...state,
  //     reviewsIndexResults: {}
  //   };
  //   newState.facilities.data[facilityId].reviews =
  //     newState.facilities.data[facilityId].reviews.filter((o) => {
  //       return o.id !== id;
  //     });
  //   return newState;
  // }
};

export default rootReducer;