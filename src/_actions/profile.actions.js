import { userConstants } from "_constants";
import { api, tokenConfig } from "./user.actions";

export const delete_profile = (id) => async (dispatch, getState) => {
  dispatch({ type: userConstants.DELETE_MENTOR_PROFILE_REQUEST });

  await api
    .delete(`/mentor-profiles/${id}/`, tokenConfig(getState))
 
      dispatch({
        type: userConstants.DELETE_MENTOR_PROFILE_SUCCESS,
        payload: id,
      });

    
     
};
