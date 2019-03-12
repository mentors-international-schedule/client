import {
  GETTING_ORGANIZATIONS,
  FAIL_GETTING_ORGANIZATIONS,
  SUCCESS_GETTING_ORGANIZATIONS
} from "../actions/actionTypes";
import { dispatch } from "rxjs/internal/observable/pairs";
import axios from "axios";
import URL from "./AJAX_URL";
export const getOrganizations = () => dispatch => {
  dispatch({ type: GETTING_ORGANIZATIONS });
  axios
    .get(`${URL}api/organizations`)
    .then(res =>
      dispatch({ type: SUCCESS_GETTING_ORGANIZATIONS, payload: res.data })
    )
    .catch(err =>{ 
      dispatch({type:FAIL_GETTING_ORGANIZATIONS, payload:err})
    });
};
