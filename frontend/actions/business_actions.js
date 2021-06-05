import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const fetchBusiness = businessId => dispatch => (
  APIUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
);
