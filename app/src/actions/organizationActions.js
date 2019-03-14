import {
  GETTING_ORGANIZATIONS,
  FAIL_GETTING_ORGANIZATIONS,
  SUCCESS_GETTING_ORGANIZATIONS,
  CREATING_ORGANIZATION,
  FAIL_CREATE_ORGANIZATION,
  SUCCESS_CREATE_ORGANIZATION,
  JOINING_ORGANIZATION,
  FAIL_JOIN_ORGANIZATIONS,
  SUCCESS_JOIN_ORGANIZATION
} from "../actions/actionTypes";

import axios from "axios";
import URL from "./AJAX_URL";
export const getOrganizations = () => dispatch => {
  dispatch({ type: GETTING_ORGANIZATIONS });
  axios
    .get(`${URL}api/organizations`)
    .then(res =>
      dispatch({ type: SUCCESS_GETTING_ORGANIZATIONS, payload: res.data })
    )
    .catch(err => {
      dispatch({ type: FAIL_GETTING_ORGANIZATIONS, payload: err });
    });
};

export const createOrganization = name => dispatch => {
  dispatch({ type: CREATING_ORGANIZATION });
  axios
    .post(`${URL}api/organizations`, { name })
    .then(res => {
      dispatch({ type: SUCCESS_CREATE_ORGANIZATION, payload: { name } });
    })
    .catch(err => {
      dispatch({ type: FAIL_CREATE_ORGANIZATION, payload: err });
    });
};

export const joinOrganization = (name, organization_id) => dispatch => {
  dispatch({ type: JOINING_ORGANIZATION });
  axios
    .post(`${URL}api/organizations/join`, { organization_id })
    .then(() =>
      dispatch({
        type: SUCCESS_JOIN_ORGANIZATION,
        payload: { name, organization_id }
      })
    )
    .catch(err => {
      dispatch({ type: FAIL_JOIN_ORGANIZATIONS, payload: err });
    });
};
