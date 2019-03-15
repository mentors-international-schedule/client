// import all the reduces
import { form } from "./forms";
import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducer";
import { organizationsReducer } from "./organizationsReducer";
import { memberBoxReducer } from "./memberBoxReducer";
import { groupReducer } from "../reducers/groupReducer";
import { messageReducer } from "./messageReducer";
import {scheduleReducer} from  './scheduleReducer'
// export all reducers as object
export default {
  form,
  messageReducer,
  loginReducer,
  signUpReducer,
  organizationsReducer,
  memberBoxReducer,
  groupReducer,
  scheduleReducer
  
};
