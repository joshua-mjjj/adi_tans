import axios from "axios";
import { userConstants } from "_constants";
export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const register = (userInitials, history) => (dispatch) => {
  console.log(userInitials);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({
    type: userConstants.REGISTER_REQUEST,
  });

  if (userInitials) {
    if (
      (userInitials.email && userInitials.password,
      userInitials.username &&
        userInitials.first_name &&
        userInitials.last_name &&
        userInitials.phone_number)
    ) {
      const object = {
        email: userInitials.email,
        password: userInitials.password,
        username: userInitials.username,
        first_name: userInitials.first_name,
        last_name: userInitials.last_name,
        phone_number: userInitials.phone_number,
        account_type: userInitials.account_type,
      };
      console.log(object);
      api
        .post("/signup/", object, config)
        .then(({ data }) => {
          dispatch({
            type: userConstants.REGISTER_SUCCESS,
            payload: data,
          });
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: userConstants.REGISTER_FAILURE,
            payload: err,
          });
        });
    }
  }
};

export const add_user_profile =
  (
    id_name,
    investment_plan,
    // latitude,
    // longitude,
    profile_type,
    owner,
    profile_pic
  ) =>
  async (dispatch, getState) => {
    const profile = JSON.stringify({
      id_name,
      investment_plan,
      latitude: "4.5",
      longitude: "3.5",
      profile_type,
      owner,
      profile_pic,
    });
    console.log(profile);

    dispatch({ type: userConstants.PROFILE_REQUEST });
    // console.log(data_object);
    await api
      .post("/profiles/", profile, tokenConfig(getState))
      .then(({ data }) => {
        console.log(data);

        // dispatch({
        //   type: userConstants.PROFILE_SUCCESS,
        //   payload: data,
        // });
      })
      .catch((err) => {
        console.log(err);
        // dispatch({
        //   type: userConstants.PROFILE_FAILURE,
        //   payload: err,
        // });
      });
  };

export const add_mentor_profile =
  (
    // latitude,
    // longitude,
    minimum_team,
    maximum_team,
    years_of_experience,
    business_name,
    project_type,
    owner,
    profile_pic
  ) =>
  async (dispatch, getState) => {
    const profile = JSON.stringify({
      latitude: "3.0",
      longitude: "9.0",
      minimum_team,
      maximum_team,
      years_of_experience,
      business_name,
      project_type,
      owner,
      profile_pic,
    });
    console.log(profile);

    dispatch({ type: userConstants.MENTOR_PROFILE_REQUEST });
    // console.log(data_object);
    await api
      .post("/mentor-profiles/", profile, tokenConfig(getState))
      .then(({ data }) => {
        console.log(data);

        dispatch({
          type: userConstants.MENTOR_PROFILE_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: userConstants.MENTOR_PROFILE_FAILURE,
          payload: err,
        });
      });
  };

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data_object = JSON.stringify({ username, password });
  dispatch({ type: userConstants.LOGIN_REQUEST });
  console.log(data_object);
  await api
    .post("/login/", data_object, config)
    .then((res) => {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: userConstants.LOGIN_FAILURE,
        payload: err,
      });
    });
};
export const logout = () => (dispatch) => {};

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  // user Loading

  await api
    .get("/users/me/", tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: userConstants.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: userConstants.USER_LOADED_FAIL });
    });
};

export const loadMentor = () => async (dispatch, getState) => {
  // user Loading

  await api
    .get("/mentor-profiles/", tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: userConstants.MENTOR_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: userConstants.MENTOR_LOADED_FAIL });
    });
};

// setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().authentication.token;
  //console.log(token)

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token, add to headers in config
  if (token) {
    config.headers["Authorization"] = `JWT ${token}`;
  }
  return config;
};
