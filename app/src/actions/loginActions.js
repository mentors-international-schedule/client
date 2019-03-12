import axios from "axios";
import URL from './AJAX_URL'
import { LOGGING_IN, SUCCESS_LOGIN, FAIL_LOGIN } from "./actionTypes";


export const login = (email, password, callback) => dispatch => {
  dispatch({ type: LOGGING_IN });
  axios
    .post(`${URL}api/users/login`, { email,password })
    .then(res=> {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type:SUCCESS_LOGIN, 
        payload:res.data,
      })
      if(callback && typeof callback === 'function') {
        callback(res.data.token)
      }
    })
    .catch(err => 
      dispatch({
        type:FAIL_LOGIN, 
        payload:err,
      })
    )
};
