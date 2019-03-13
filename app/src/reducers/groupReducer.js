import {
  CREATING_GROUP,
  SUCCESS_CREATE_GROUP,
  FAIL_CREATE_GROUP,
  DELETEING_GROUP,
  SUCCESS_DELETE_GROUP,
  FAIL_DELETE_GROUP,
  GETTING_GROUPS,
  FAIL_GET_GROUPS,
  SUCCESS_GET_GROUPS,
  SET_VIEWING_GROUP
} from "../actions/actionTypes";

const initState = {
  groups: [],
  gettingGroups: false,
  creatingGroup: false,
  error: null,
  viewingId : null,
};

export function groupReducer(state = initState, action) {
  switch (action.type) {
    case CREATING_GROUP:
      return {
        ...state,
        creatingGroup: true,
        error: null
      };
    case SUCCESS_CREATE_GROUP:
      return {
        ...state,
        creatingGroup: false,
        groups: [...state.groups, action.payload]
      };
    case FAIL_CREATE_GROUP:
      return { ...state, creatingGroup: false, error: action.payload };
    case GETTING_GROUPS:
      return { ...state, gettingGroups: true, error: null };
    case SUCCESS_GET_GROUPS:
      return { ...state, gettingGroups: false, groups: action.payload };
    case FAIL_GET_GROUPS:
      return { ...state, gettingGroups: false, error: action.payload };
    case SET_VIEWING_GROUP:
      return {...state, viewingId: action.payload}
    default:
      return state;
  }
}
