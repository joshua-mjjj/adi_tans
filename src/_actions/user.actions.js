import axios from "axios";
import { userConstants } from "_constants";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/source",
});

export const register = (userInitials) => (dispatch) => {
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

export const login = (userInitials) => (dispatch) => {
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
    if (userInitials.email && userInitials.password) {
      const object = {
        email: userInitials.email,
        password: userInitials.password,
      };
      console.log(object);
      api
        .post("/login/", object, config)
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          dispatch({
            type: userConstants.LOGIN_SUCCESS,
            payload: data,
          });
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
export const logout = () => (dispatch) => {};
