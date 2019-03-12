import {
  SUCCESS_SIGN_UP,
  FAIL_SIGN_UP,
  SIGNING_UP
} from "../actions/actionTypes";

const initState = {
  signingUp: false,
  error: null
};

export function signUpReducer(stateOfSignUp = initState, action) {
  switch (action.type) {
    case SIGNING_UP:
      return { ...stateOfSignUp, signingUp: true };
    case SUCCESS_SIGN_UP:
      return { ...stateOfSignUp, signingUp: false };
    case FAIL_SIGN_UP:
      return { ...stateOfSignUp, signingUp: false, error: action.payload };
    default:
      return stateOfSignUp
  }
}
