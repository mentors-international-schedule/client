import {
  LOGGING_IN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  SUCCESS_SIGN_UP,
  SET_USER,
  LOG_OUT,
  SUCCESS_CREATE_ORGANIZATION,
  SUCCESS_JOIN_ORGANIZATION,
  SET_USER_IMAGE
} from "../actions/actionTypes";

let initState = {
  loggingIn: false,
  currentUser: null,
  error: null,
  userSet: false,
  userImage: null,
};

export function loginReducer(stateOfLogin = initState, action) {
  switch (action.type) {
    case SUCCESS_SIGN_UP:
      return { ...stateOfLogin, currentUser: action.payload };
    case LOGGING_IN:
      return { ...stateOfLogin, loggingIn: true };
    case SUCCESS_LOGIN:
      return {
        ...stateOfLogin,
        loggingIn: false,
        error: null,
        currentUser: action.payload
      };
    case FAIL_LOGIN:
      return { ...stateOfLogin, loggingIn: false, error: action.payload };
    case SET_USER:
      return {
        ...stateOfLogin,
        userSet: true
      };
    case LOG_OUT:
      return {
        loggingIn: false,
        currentUser: null,
        error: null,
        userSet: false
      };
    case SUCCESS_CREATE_ORGANIZATION:
      return {
        ...stateOfLogin, // need to set the name of organization in the user or get the payload to be a new user
        currentUser: {
          ...stateOfLogin.currentUser,
          currentUser: {
            ...stateOfLogin.currentUser,
            organization: action.payload
          }
        }
      };
    case SUCCESS_JOIN_ORGANIZATION:
      return {
        ...stateOfLogin, // need to set the name of organization in the user or get the payload to be a new user
        currentUser: {
          ...stateOfLogin.currentUser,
          organization: action.payload
        }
      };
      case SET_USER_IMAGE:
      return {...stateOfLogin, userImage: action.payload}
    default:
      return stateOfLogin;
  }
}
