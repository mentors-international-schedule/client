import { SUCCESS_LOGIN, SUCCESS_SIGN_UP, LOG_OUT, SET_AUTH } from "../actions/actionTypes";

const authenticate = store => next => action => {
  if (action.type === SUCCESS_LOGIN || action.type === SUCCESS_SIGN_UP) {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("user", JSON.stringify(action.payload));
  }
  if (
    action.payload !== undefined &&
    action.payload.response !== undefined &&
    action.payload.response.status === 401
  ) {
    debugger;
    localStorage.clear();
    action.type = LOG_OUT;
  }
  next(action);
};

export default authenticate;
