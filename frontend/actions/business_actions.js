import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES'

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
})

export const fetchBusiness = businessId => dispatch => (
  APIUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
);

export const fetchBusinesses = () => dispatch => (
  APIUtil.fetchBusinesses()
    .then((businesses) => dispatch(receiveAllBusinesses(businesses)))
);

