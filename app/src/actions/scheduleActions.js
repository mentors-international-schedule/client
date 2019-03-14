import axios from "axios";
import URL from "./AJAX_URL";

import {
  SCHEDULING_MESSAGE,
  SUCCESS_SCHEDULING_MESSAGE,
  FAIL_SCHEDULING_MESSAGE
} from "./actionTypes";


export const scheduleMessage = (body) => dispatch => {
    dispatch({type:SCHEDULING_MESSAGE})
    axios.post(`${URL}api/scheduler`, body)
    .then(res => {debugger; dispatch({type:SUCCESS_SCHEDULING_MESSAGE, action:res.data})})
    .catch(err => {debugger; dispatch({type: FAIL_SCHEDULING_MESSAGE, payload: err})} )
}