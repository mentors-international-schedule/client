
import axios from "axios";
import URL from "./AJAX_URL";
import {
  SENDING_MESSAGE,
  SUCCESS_SENDING_MESSAGE,
  FAIL_SENDING_MESSAGE,
  SUCCESS_GETTING_MESSAGES,
  FAIL_GETTING_MESSAGES,
  GETTING_MESSAGES,
  DRAFTING_MESSAGE,
  SUCCESS_DRAFTING_MESSAGE,
  FAIL_DRAFTING_MESSAGE,
  SET_MESSAGE,
  UPDATE_INPUT_MESSAGE,
  DELETING_MESSAGE,
  SUCCESS_DELETING_MESSAGE,
  FAIL_DELETING_MESSAGE
} from "./actionTypes";


export const sendMessage = (contact_ids, message, group_id) => dispatch => {
  dispatch({ type: SENDING_MESSAGE });
  axios
    .post(`${URL}api/notifications/${group_id}`, { message, contact_ids })
    .then(res =>{dispatch({ type: SUCCESS_SENDING_MESSAGE, payload: res.data })})
    .catch(err => dispatch({ type: FAIL_SENDING_MESSAGE, payload: err }));
};

export const draftMessage = (message, group_id) => dispatch => {
  dispatch({ type: DRAFTING_MESSAGE });
  axios
    .post(`${URL}api/notifications/drafts/${group_id}`, { message })
    .then(res => dispatch({ type: SUCCESS_DRAFTING_MESSAGE, payload:{message, id:res.data.message_id} }))
    .catch(err => dispatch({ type: FAIL_DRAFTING_MESSAGE, payload: err }));
};

export const getMessages = (group_id) => dispatch => {
  dispatch({type:GETTING_MESSAGES});
  axios.get(`${URL}api/notifications/${group_id}`,{ headers: { Authorization: localStorage.getItem("token") }})
    .then(res =>  dispatch({type:SUCCESS_GETTING_MESSAGES, payload: res.data } ))
    .catch(err =>{ dispatch({type:FAIL_GETTING_MESSAGES, payload:err} )} )
}

export const deleteMessage = (message_id) => dispatch => {
  dispatch({type:DELETING_MESSAGE});
  axios.get(`${URL}api/notifications/drafts/${message_id}`)
    .then((res)=>{dispatch({type: SUCCESS_DELETING_MESSAGE, payload: message_id})})
    .catch(err =>{dispatch({type:FAIL_DELETING_MESSAGE, payload: err})})
}

export function setMessage(message){
  return {type: SET_MESSAGE , payload: message}
}

export function updateInputMessage(message){
  return{type: UPDATE_INPUT_MESSAGE, payload: message}
}