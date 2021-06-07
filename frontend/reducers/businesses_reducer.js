import {RECEIVE_BUSINESS} from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.product)
    default:
      return state;
  }
};

export default businessesReducer;