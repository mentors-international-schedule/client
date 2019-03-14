import {
  SCHEDULING_MESSAGE,
  SUCCESS_SCHEDULING_MESSAGE,
  FAIL_SCHEDULING_MESSAGE
} from "../actions/actionTypes";
const initState = {
  messages: [],
  schedulingMessage: false,
  error: null
};

export function scheduleReducer(state = initState, action) {
  switch (action.type) {
    case SCHEDULING_MESSAGE:
      return { ...state, schedulingMessage: true };
    case SUCCESS_SCHEDULING_MESSAGE:
      return { ...state, schedulingMessage: false };
      case FAIL_SCHEDULING_MESSAGE:
      return {...state, schedulingMessage: false}
    default:
      return state;
  }
}
