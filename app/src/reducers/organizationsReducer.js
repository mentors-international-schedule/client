import {
  GETTING_ORGANIZATIONS,
  FAIL_GETTING_ORGANIZATIONS,
  SUCCESS_GETTING_ORGANIZATIONS
} from "../actions/actionTypes";

const initState = {
  gettingOrgs: false,
  organizations: {},
  error: null
};

export function organizationsReducer(organizationsState = initState, action) {
  switch (action.type) {
    case GETTING_ORGANIZATIONS:
      return { ...organizationsState, gettingOrgs: true, error: null };
    case SUCCESS_GETTING_ORGANIZATIONS:
      return {
        ...organizationsState,
        gettingOrgs: false,
        organizations: action.payload
      };
    case FAIL_GETTING_ORGANIZATIONS:
      return {
        ...organizationsState,
        gettingOrgs: false,
        error: action.payload
      };
    default:
      return organizationsState;
  }
}
