import {
  GETTING_CONTACTS,
  SUCCESS_GETTING_CONTACTS,
  FAIL_GETTING_CONTACTS,
  CREATING_CONTACT,
  FAIL_CREATING_CONTACT,
  SUCCESS_CREATING_CONTACT,
  DELETING_CONTACT,
  SUCCESS_DELETING_CONTACT,
  FAIL_DELETING_CONTACT,
} from "../actions/actionTypes";

const initState = {
  contacts: [],
  gettingContacts: false,
  creatingContact: false,
  deletingContact: false,
  error: null
};

export function memberBoxReducer(state = initState, action) {
  switch (action.type) {
    case GETTING_CONTACTS:
      return { 
        ...state, 
        gettingContacts: true,
        error: null,
      }
    case SUCCESS_GETTING_CONTACTS:
      return { 
        ...state, 
        gettingContacts: false,
        contacts: action.payload,
      }
    case FAIL_GETTING_CONTACTS:
      return { 
        ...state, 
        gettingContacts: false,
        error: action.payload,
      }
    case CREATING_CONTACT:
      return {
        ...state,
        creatingContact: true,
        error: null,
      }
    case SUCCESS_CREATING_CONTACT:
      return {
        ...state,
        creatingContact: false,
        contacts: [...state.contacts, action.payload],
      }
    case FAIL_CREATING_CONTACT:
      return {
        ...state,
        creatingContact: false,
        error: action.payload, 
      }
    case DELETING_CONTACT:
      return {
        ...state,
        deletingContact: true,
        error: null,
      }
    case SUCCESS_DELETING_CONTACT:
      return {
        ...state,
        deletingContact: false,
        contacts: action.payload,
      }
    case FAIL_DELETING_CONTACT:
      return {
        ...state,
        deletingContact: false,
        error: action.payload, 
      }
    default:
      return state;
  }
}
