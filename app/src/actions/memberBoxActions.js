import axios from "axios";
import URL from "./AJAX_URL";

import {
  GETTING_CONTACTS,
  SUCCESS_GETTING_CONTACTS,
  FAIL_GETTING_CONTACTS,
  CREATING_CONTACT,
  FAIL_CREATING_CONTACT,
  SUCCESS_CREATING_CONTACT
} from "./actionTypes";

export const getContacts = (groupId) => dispatch => {
  dispatch({ type: GETTING_CONTACTS });
  axios
    .get(`${URL}api/contacts/:id`, { groupId })
    .then(res => {
      dispatch({
        type: SUCCESS_GETTING_CONTACTS,
        payload: res.data
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