import axios from "axios";
import { LOGGING_IN, SUCCESS_LOGIN, FAIL_LOGIN } from "./actionTypes";


export const login = (email, password) => dispatch => {
  dispatch({ type: LOGGING_IN });
  // add login request
};
