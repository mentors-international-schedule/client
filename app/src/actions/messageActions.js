
import axios from "axios";
import URL from "./AJAX_URL";
import {
  SENDING_MESSAGE,
  SUCCESS_SENDING_MESSAGE,
  FAIL_SENDING_MESSAGE,
  SUCCESS_GETTING_MESSAGES,
  FAIL_GETTING_MESSAGES,
  GETING_MESSAGES,
  DRAFTING_MESSAGE,
  SUCCESS_DRAFTING_MESSAGE,
  FAIL_DRAFTING_MESSAGE
} from "./actionTypes";

export const sendMessage = (contact_ids, message, group_id) => dispatch => {
  dispatch({ type: SENDING_MESSAGE });
  axios
    .post(`${URL}notifications:${group_id}`, { message, contact_ids })
    .then(res => dispatch({ type: SUCCESS_SENDING_MESSAGE, payload: res.data }))
    .catch(err => dispatch({ type: FAIL_SENDING_MESSAGE, payload: err }));
};

export const draftMessage = (message, group_id) => dispatch => {
  dispatch({ type: DRAFTING_MESSAGE });
  axios
    .post(`${URL}notifications/drafts:${group_id}`, { message })
    .then(res => dispatch({ type: SUCCESS_DRAFTING_MESSAGE }))
    .catch(err => dispatch({ type: FAIL_DRAFTING_MESSAGE, payload: err }));
};

export const getMessages = (group_id) => dispatch => {
  dispatch({type:GETING_MESSAGES});
  axios.get(`${URL}notifications:${group_id}`)
    .then(res => dispatch({type:SUCCESS_GETTING_MESSAGES, payload: res.data } ))
    .catch(err =>dispatch({type:FAIL_GETTING_MESSAGES, payload:err} ) )
}