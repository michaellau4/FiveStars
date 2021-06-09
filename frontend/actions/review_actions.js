import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';

const receiveReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const fetchReviews = (businessId) => (
  APIUtil.fetchReviews(businessId)
    .then((reviews) => dispatchEvent(receiveReviews(reviews)))
);
