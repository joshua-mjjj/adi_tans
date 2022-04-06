import { userConstants } from "_constants";

const initialState = {
  profile_loading: false,
  user: null,
  error: null,
};

export function profile(state = initialState, action) {
  switch (action.type) {
    case userConstants.PROFILE_REQUEST:
      return {
        ...state,
        profile_loading: true,
      };
    case userConstants.PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case userConstants.PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        profile_loading: false,
      };

    default:
      return state;
  }
}
