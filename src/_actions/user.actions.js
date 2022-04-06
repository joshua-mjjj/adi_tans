import axios from "axios";
import { userConstants } from "_constants";
const { REACT_APP_API_URL } = process.env;
console.log(REACT_APP_API_URL);
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const register =
  (first_name, last_name, email, username, phone_number, password, history) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data_object = JSON.stringify({
      first_name,
      last_name,
      email,
      username,
      phone_number,
      password,
    });
    dispatch({
      type: userConstants.REGISTER_REQUEST,
    });

    console.log(data_object);
    api
      .post("/signup/", data_object, config)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
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

export const add_profile =
  (
    id_name,
    investment_plan,
    latitude,
    longitude,
    profile_type,
    owner,
    profile_pic
  ) =>
  async (dispatch, getState) => {
    const profile = JSON.stringify({
      id_name,
      investment_plan,
      latitude,
      longitude,
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

        dispatch({
          type: userConstants.PROFILE_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: userConstants.PROFILE_FAILURE,
          payload: err,
        });
      });
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: userConstants.LOGOUT,
  });
};

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

// setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().authentication.token;
  console.log(token);

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
