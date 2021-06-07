export const fetchBusiness = (businessId) => (
  $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}`
  })
);
