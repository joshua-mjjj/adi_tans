import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
export default combineReducers({
  registration,
  authentication,
});
