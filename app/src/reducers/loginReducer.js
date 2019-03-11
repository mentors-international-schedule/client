import {
  LOGGING_IN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  SUCCESS_SIGN_UP
} from "../actions/actionTypes";

const initState = {
  loggingIn: false,
  currentUser: null,
  error: null
};

export function loginReducer(stateOfLogin = initState, action) {
  switch (action.type) {
    case SUCCESS_SIGN_UP:
      return { ...stateOfLogin, currentUser: action.payload };
    case LOGGING_IN:
      return { ...stateOfLogin, loggingIn: true };
    case SUCCESS_LOGIN:
      return { ...stateOfLogin, loggingIn: false, currentUser: action.payload };
    case FAIL_LOGIN:
      return { ...stateOfLogin, loggingIn: false, error: action.payload };
    default:
      return stateOfLogin;
  }
}
