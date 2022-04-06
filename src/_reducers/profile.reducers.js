import { userConstants } from "_constants";

// let user = JSON.parse(localStorage.getItem("user"));
// // const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  profile_loading: false,
  loggedIn: false,
  user: null,
};

export function profile(state = initialState, action) {
  switch (action.type) {
    case userConstants.PROFILE_REQUEST:
      return {
        ...state,
        profile_loading: true,
      };
    case userConstants.PROFILE_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    case userConstants.PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case userConstants.MENTOR_LOADED:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case userConstants.MENTOR_LOADED_FAIL:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
