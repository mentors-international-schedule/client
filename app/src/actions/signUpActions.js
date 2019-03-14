import axios from "axios";
import URL from './AJAX_URL'
import {SIGNING_UP,  SUCCESS_SIGN_UP, FAIL_SIGN_UP} from './actionTypes'


export const signUp = (email, firstname, lastname, password) => dispatch => {
    dispatch({type:SIGNING_UP});
    axios
      .post(
        `${URL}api/users/register`, 
        {email, firstname, lastname, password},
      )
      .then(res=> { 
        dispatch({
          type:SUCCESS_SIGN_UP, 
          payload:res.data
        })
      })
      .catch(err=> {
        dispatch({
          type:FAIL_SIGN_UP, 
          payload:err
        })
      })
}