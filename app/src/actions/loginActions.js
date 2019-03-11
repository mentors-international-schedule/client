import axios from "axios";
import { LOGIN, LOGGING_IN } from "./actionTypes";


export const login = (email, password) => dispatch => {
  dispatch({ type: LOGGING_IN });
  // add login request
};
