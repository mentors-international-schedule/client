import {
  SENDING_MESSAGE,
  SUCCESS_SENDING_MESSAGE,
  FAIL_SENDING_MESSAGE,
  SUCCESS_GETTING_MESSAGES,
  FAIL_GETTING_MESSAGES,
  DRAFTING_MESSAGE,
  SUCCESS_DRAFTING_MESSAGE,
  FAIL_DRAFTING_MESSAGE,
  GETTING_MESSAGES,
  SET_MESSAGE,
  DELETING_MESSAGE,
  SUCCESS_DELETING_MESSAGE,
  FAIL_DELETING_MESSAGE,
  CLEAR_LOCAL_MESSAGES,
  SUCCESS_SCHEDULING_MESSAGE
} from "../actions/actionTypes";

const initState = {
  messages: [],
  sendingMessage: false,
  gettingMessages: false,
  draftingMessages: false,
  deletingMessage: false,
  error: null,
  workingOnDraftId: null,
  currentMessageId: null,
};
export function messageReducer(state = initState, action) {
  switch (action.type) {
    case SENDING_MESSAGE:
      return {
        ...state,
        sendingMessage: true,
        error: null,
        workingOnDraftId: null
      };
    case SUCCESS_SENDING_MESSAGE:
      return {
        ...state,
        sendingMessage: false,
        messages: [...state.messages, action.payload]
      };
    case FAIL_SENDING_MESSAGE:
      return { ...state, sendingMessage: false, error: action.payload };
    case GETTING_MESSAGES:
      return { ...state, gettingMessages: true, error: null };
    case SUCCESS_GETTING_MESSAGES:
      return {
        ...state,
        gettingMessages: false,
        messages: action.payload,
        currentMessageId: action.currentId
      };
    case FAIL_GETTING_MESSAGES:
      return { ...state, gettingMessages: false, error: action.payload };
    case DRAFTING_MESSAGE:
      return {
        ...state,
        draftingMessages: true,
        error: null,
        workingOnDraftId: null
      };
    case SUCCESS_DRAFTING_MESSAGE:
      return {
        ...state,
        draftingMessages: false,
        messages: [
          ...state.messages,
          { message: action.payload.message, id: action.payload.id }
        ]
      };
    case FAIL_DRAFTING_MESSAGE:
      return { ...state, draftingMessages: false, error: action.payload };
    case SET_MESSAGE:
      return { ...state, workingOnDraftId: action.payload.id };
    case DELETING_MESSAGE:
      return { ...state, deletingMessage: true };
    case SUCCESS_DELETING_MESSAGE:
      return {
        ...state,
        deletingMessage: false,
        messages: state.messages.filter(message => {
          return message.id !== action.payload;
        })
      };
    case FAIL_DELETING_MESSAGE:
      return { ...state, deletingMessage: false, error: action.payload };
    case CLEAR_LOCAL_MESSAGES: {
      return { ...state, workingOnDraftId: null, messages: [] };
    }
    case SUCCESS_SCHEDULING_MESSAGE:
      return {...state, workingOnDraftId: null}
    default:
      return state;
  }
}
