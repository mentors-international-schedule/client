import axios from "axios";
import URL from './AJAX_URL'
import { LOGGING_IN, SUCCESS_LOGIN, FAIL_LOGIN } from "./actionTypes";


export const login = (email, password) => dispatch => {
  dispatch({ type: LOGGING_IN });
  console.log({email,password})
  axios.post(`${URL}api/users/login`,{email,password})
    .then(res=> dispatch({type:SUCCESS_LOGIN, payload:res.data}))
    .catch(err => dispatch({type:FAIL_LOGIN, payload:err}))
};
