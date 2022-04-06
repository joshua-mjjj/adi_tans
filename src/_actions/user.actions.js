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
        account_type: userInitials.account_type,
      };
      console.log(object);
      api
        .post("/signup/", object, config)
        .then(({ data }) => {
          // dispatch({
          //   type: userConstants.REGISTER_SUCCESS,
          //   payload: data,
          // });
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

// LOAD CLUSTERS
export const loadClusters = () => async (dispatch, getState) => {
  // user Loading

  await api
    .get("/clusters/", tokenConfig(getState))
    .then((res) => {
      const clusters = res.data.results

      clusters.filter((cluster) => {
        // for each cluster

        const cluster_array = cluster.cluster_members.split('');
        console.log(cluster_array)

        cluster_array.map((cluster_member) => {
          // console.log(cluster_member)
           api.get(`/profiles/${cluster_member}/`, tokenConfig(getState))
             .then((res) => {
              dispatch({
                type: userConstants.SAVE_CLUSTER_MEMBER,
                payload: res.data
              });
              // console.log(res.data)
              // object.push(res.data.id_name)
            })
             .catch((err) => {
               console.log(err)
            })
        })




      })
      // const cluster_array = cluster.split('');
      // console.log(cluster_array)
      // dispatch({
      //   type: userConstants.USER_LOADED,
      //   payload: res.data
      // });
    })
    .catch((err) => {
      console.log(err)
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


