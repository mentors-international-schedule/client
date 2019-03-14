import {
  SCHEDULING_MESSAGE,
  SUCCESS_SCHEDULING_MESSAGE,
  FAIL_SCHEDULING_MESSAGE,
  GETTING_SCHEDULED_MESSAGES,
  SUCCESS_GETTING_SCHEDULED_MESSAGES,
  FAIL_GETTING_SCHEDULED_MESSAGES,
  DELETING_SCHEDULED_MESSAGES,
  SUCCESS_DELETING_SCHEDULED_MESSAGES,
  FAIL_DELETING_SCHEDULED_MESSAGES
} from "../actions/actionTypes";

const initState = {
  messages: [],
  schedulingMessage: false,
  gettingMessages: false,
  deletingMessage: false,
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
    case GETTING_SCHEDULED_MESSAGES:
      return {
        ...state,
        gettingMessages: true,
      }
    case SUCCESS_GETTING_SCHEDULED_MESSAGES:
      return {
        ...state,
        gettingMessages: false,
        messages: action.payload
      }
    case FAIL_GETTING_SCHEDULED_MESSAGES:
      return {
        ...state,
        gettingMessages: false,
        error: action.payload,
      }
    case DELETING_SCHEDULED_MESSAGES:
      return {
        ...state,
        deletingMessage: true,
      }
    case SUCCESS_DELETING_SCHEDULED_MESSAGES:
      return {
        ...state,
        deletingMessage: false,
        messages: action.payload,
      }
    case FAIL_DELETING_SCHEDULED_MESSAGES:
      return {
        ...state,
        deletingMessage: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
