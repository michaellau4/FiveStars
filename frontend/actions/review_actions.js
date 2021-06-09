import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchReviews = (businessId) => dispatch => (
  APIUtil.fetchReviews(businessId)
    .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const createReview = (review, businessId) => dispatch => (
  APIUtil.createReview(review, businessId)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);