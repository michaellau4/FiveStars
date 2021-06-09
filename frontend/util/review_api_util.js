export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const createReview = (review, businessId) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    data: { review }
  })
)

