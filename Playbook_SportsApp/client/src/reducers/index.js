import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import profileReducer from "./profileReducer";
import venueReducer from "./venueReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  events: eventReducer,
  profile: profileReducer,
  venues: venueReducer,
});
