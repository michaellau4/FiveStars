import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import businessReducer from './business_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  business: businessReducer
});

export default entitiesReducer;