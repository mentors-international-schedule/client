import axios from "axios";
import { LOGIN, LOGGINGIN } from "./actionTypes";


export const login = (email, password) => dispatch => {
  dispatch({ type: LOGGINGIN });
  // add login request
};
