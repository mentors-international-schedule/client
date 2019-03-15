import { reducer as formReducer } from "redux-form";
import {
  SET_MESSAGE,
  SUCCESS_SENDING_MESSAGE,
  SUCCESS_DRAFTING_MESSAGE,
  UPDATE_INPUT_MESSAGE,
  SUCCESS_SCHEDULING_MESSAGE
} from "../actions/actionTypes";

const form = formReducer.plugin({
  // make custom reducers for redux forms
  loginForm: (state, action) => {
    //login form reducer here
  },
  composeMessage: (state, action) => {
    switch (action.type) {
      case SET_MESSAGE:
        return { ...state, values: { message: action.payload.message } };
      case SUCCESS_SENDING_MESSAGE:
        return { ...state, values: { message: "" } };
      case SUCCESS_DRAFTING_MESSAGE:
        return { ...state, values: { message: "" } };
      case SUCCESS_SCHEDULING_MESSAGE:
        return { ...state, values: { message: "" } }
      case UPDATE_INPUT_MESSAGE:
        return {...state, values: {message: action.payload}}
      default:
        return state;
    }
  }
});

export { form }; // must be called form in the object of reducers to be combined
