export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const fetchReview = (businessId, reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews/${reviewId}`
  })
) 

export const createReview = (review, businessId) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    data: { review }
  })
)

