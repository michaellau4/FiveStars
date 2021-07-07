export const fetchBusiness = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}`
  })
);
 
export const fetchBusinesses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/businesses'
  })
);

export const searchBusinesses = search => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses?query=${search}`
  })
);