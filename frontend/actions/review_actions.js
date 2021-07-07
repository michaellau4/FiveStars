import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

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

const removeReview = () => ({
  type: REMOVE_REVIEW
})

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

export const updateReview = (review, businessId) => dispatch => (
  APIUtil.updateReview(review, businessId)
    .then((review) => dispatch(receiveReview(review)))
);

export const deleteReview = (review, businessId) => dispatch => (
  APIUtil.deleteReview(review, businessId)
    .then((review) => dispatch(removeReview(review)))
);