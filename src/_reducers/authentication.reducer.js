import { userConstants } from "_constants";

// let user = JSON.parse(localStorage.getItem("user"));
// // const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  login_loading: false,
  loggedIn: false,
  token: localStorage.getItem("token"),
  user: null,
  token: null,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        login_loading: true,
      };
    case userConstants.USER_LOADED_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    case userConstants.USER_LOADED:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      localStorage.removeItem("token");
      return {};
    default:
      return state;
  }
}
