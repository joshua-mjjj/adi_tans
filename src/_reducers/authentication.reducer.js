import { userConstants } from "_constants";

// let user = JSON.parse(localStorage.getItem("user"));
// // const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  login_loading: false,
  loggedIn: false,
  token: localStorage.getItem('token'),
  user: null,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        login_loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}


