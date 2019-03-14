import axios from "axios";
import URL from "./AJAX_URL";
import { LOGGING_IN, SUCCESS_LOGIN, FAIL_LOGIN, SET_USER, SET_AUTH, LOG_OUT } from "./actionTypes";

export const login = (email, password, callback) => dispatch => {
  dispatch({ type: LOGGING_IN });
  axios
    .post(`${URL}api/users/login`, { email, password })
    .then(res => {
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data
      });
      if (callback && typeof callback === "function") {
        callback(res.data.token);
      }
    })
    .catch(err =>
      dispatch({
        type: FAIL_LOGIN,
        payload: err.response.data.message
      })
    );
};

export const setUser = (user) => dispatch => {
  axios.defaults.headers.common["Authorization"] = user.token;
  dispatch({ type: SET_USER, payload: user });
  
}
export function setAuth(token) {
  return{type: SET_AUTH, payload: token}
}
export function logout() {
  localStorage.clear();
  return {type:LOG_OUT}
}