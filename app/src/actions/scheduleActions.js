import axios from "axios";
import URL from "./AJAX_URL";

import {
  SCHEDULING_MESSAGE,
  SUCCESS_SCHEDULING_MESSAGE,
  FAIL_SCHEDULING_MESSAGE,
  GETTING_SCHEDULED_MESSAGES,
  SUCCESS_GETTING_SCHEDULED_MESSAGES,
  FAIL_GETTING_SCHEDULED_MESSAGES,
  DELETING_SCHEDULED_MESSAGES,
  SUCCESS_DELETING_SCHEDULED_MESSAGES,
  FAIL_DELETING_SCHEDULED_MESSAGES,
  CLEAR_LOCAL_SCHEDULED_MESSAGES,
} from "./actionTypes";

export const scheduleMessage = body => dispatch => {
  dispatch({ type: SCHEDULING_MESSAGE });
  axios
    .post(`${URL}api/scheduler`, body)
    .then(res => {
      debugger;
      dispatch({ type: SUCCESS_SCHEDULING_MESSAGE, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: FAIL_SCHEDULING_MESSAGE, payload: err });
    });
};

export const getScheduledMessages = group_id => dispatch => {
  dispatch({ type: GETTING_SCHEDULED_MESSAGES });
  axios
    .get(`${URL}api/scheduler/${group_id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      debugger;
      dispatch({
        type: SUCCESS_GETTING_SCHEDULED_MESSAGES,
        payload: res.data
      });
    })
    .catch(err => {
      debugger;
      dispatch({
        type: FAIL_GETTING_SCHEDULED_MESSAGES,
        payload: err
      });
    });
};

export const deleteScheduledMessage = (message_id) => dispatch => {
  dispatch({ type: DELETING_SCHEDULED_MESSAGES });
  axios
    .delete(`${URL}api/scheduler/${message_id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: SUCCESS_DELETING_SCHEDULED_MESSAGES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FAIL_DELETING_SCHEDULED_MESSAGES,
        payload: err
      });
    });
};

export function clearLocalScheduledMessages() {
  return { type: CLEAR_LOCAL_SCHEDULED_MESSAGES };
}