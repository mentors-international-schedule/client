import { SUCCESS_LOGIN, SUCCESS_SIGN_UP } from "../actions/actionTypes";
const authenticate = store => next => action => {
  if (action.type === SUCCESS_LOGIN || action.type === SUCCESS_SIGN_UP) {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("user", JSON.stringify(action.payload))
  }
  if (action.payload !== undefined && action.payload.status === 401) {
    localStorage.clear();
  }
  next(action);
};

export default authenticate;
