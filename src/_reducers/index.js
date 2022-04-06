import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
import { profile } from "./profile.reducer";
import { alert } from "./alert.reducer";
export default combineReducers({
  registration,
  authentication,
  alert,
  profile,
});
