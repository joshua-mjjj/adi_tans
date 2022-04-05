import axios from "axios";
import { userConstants } from "_constants";
const api = axios.create({
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
    type: userConstants.LOGIN_REQUEST,
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
      };
      console.log(object);
      api
        .post("/signup/", object, config)
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          dispatch({
            type: userConstants.LOGIN_SUCCESS,
            payload: data,
          });
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: userConstants.LOGIN_FAILURE,
            payload: err,
          });
        });
    }
  }
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
export const logout = () => (dispatch) => {
  
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
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: userConstants.USER_LOADED_FAIL });
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
      'Content-Type': 'application/json'
    }
  };
  // if token, add to headers in config
  if (token) {
    config.headers['Authorization'] = `JWT ${token}`;
  }
  return config;
};


