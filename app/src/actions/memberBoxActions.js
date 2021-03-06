import axios from "axios";
import URL from "./AJAX_URL";

import {
  GETTING_CONTACTS,
  SUCCESS_GETTING_CONTACTS,
  FAIL_GETTING_CONTACTS,
  CREATING_CONTACT,
  FAIL_CREATING_CONTACT,
  SUCCESS_CREATING_CONTACT,
  DELETING_CONTACT,
  SUCCESS_DELETING_CONTACT,
  FAIL_DELETING_CONTACT,
  REPLACE_CONTACTS,
} from "./actionTypes";

export const getContacts = (groupId) => dispatch => {
  dispatch({ type: GETTING_CONTACTS });
  axios
    .get(`${URL}api/contacts/${groupId}`, { headers: { Authorization: localStorage.getItem("token") }})
    .then(res => {
      // give all contacts a bool
      // const edittedContacts = res.data.map(contact => Object.assign(contact, {"isChecked": false}))
      dispatch({
        type: SUCCESS_GETTING_CONTACTS,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch({
        type: FAIL_GETTING_CONTACTS,
        payload: err
      })
    );
}

export const createContact = (name, phone_number, group_id) => dispatch => {
  dispatch({ type: CREATING_CONTACT });
  axios
    .post(`${URL}api/contacts`, { name, phone_number, group_id })
    .then(res => {
      Object.assign(res.data, {'isChecked':false});
      dispatch({
        type: SUCCESS_CREATING_CONTACT                                                                                                                                                                                                                                                                                                                                                                                           ,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: FAIL_CREATING_CONTACT,
        payload: err
      })
    );
}

export const deleteContact = (user_id, group_id) => dispatch => {
  dispatch({ type: DELETING_CONTACT });
  axios
    .delete(`${URL}api/contacts/${user_id}/${group_id}`)
    .then(res => {
      dispatch({
        type: SUCCESS_DELETING_CONTACT                                                                                                                                                                                                                                                                                                                                                                                           ,
        payload: res.data //{success: true}
      });
    })
    .catch(err =>
      dispatch({
        type: FAIL_DELETING_CONTACT,
        payload: err
      })
    );
}

export function replaceContacts(contacts) {
  return {type: REPLACE_CONTACTS, payload: contacts }
}