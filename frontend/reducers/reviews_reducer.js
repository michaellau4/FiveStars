import {RECEIVE_ALL_REVIEWS} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;