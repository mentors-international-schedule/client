import {
    SENDING_MESSAGE,
    SUCCESS_SENDING_MESSAGE,
    FAIL_SENDING_MESSAGE,
    SUCCESS_GETTING_MESSAGES,
    FAIL_GETTING_MESSAGES,
    GETING_MESSAGES,
    DRAFTING_MESSAGE,
    SUCCESS_DRAFTING_MESSAGE,
    FAIL_DRAFTING_MESSAGE,
    GETTING_MESSAGES
  } from "../actions/actionTypes";

  const initState = {
      messages : [],
      sendingMessage: false,
      gettingMessages: false,
      draftingMessages: false,
      error: null,
  }
  export function messageReducer(state=initState, action){
      switch(action.payload){
        case SENDING_MESSAGE:
        return { ...state , sendingMessage: true, error: null}
        case SUCCESS_SENDING_MESSAGE:
        return {...state, sendingMessage: false, messages: [...state.messages, action.payload]}
        case FAIL_SENDING_MESSAGE:
        return {...state, error:action.payload}
        case GETTING_MESSAGES:
        return {...state, gettingMessages: true, error: null}
        case SUCCESS_GETTING_MESSAGES: 
        return {...state, gettingMessages: false, messages: action.payload}
    default:
        return state
      }
  }