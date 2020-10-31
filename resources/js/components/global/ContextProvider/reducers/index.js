import authReducer from './authReducer';
import facilitiesReducer from './facilitiesReducer';
import reviewsReducer from './reviewsReducer';
import mastersReducer from './mastersReducer';
import visibilityReducer from './visibilityReducer';
import noticeReducer from './noticeReducer';
import eventsReducer from './eventsReducer';

const rootReducer = (state = {}, action) => {
  return {
    auth: authReducer(state.auth, action),
    facilities: facilitiesReducer(state.facilities, action),
    reviews: reviewsReducer(state.reviews, action),
    events: eventsReducer(state.events, action),
    masters: mastersReducer(state.masters, action),
    visibility: visibilityReducer(state.visibility, action),
    notice: noticeReducer(state.notice, action),
  };
};

export default rootReducer;