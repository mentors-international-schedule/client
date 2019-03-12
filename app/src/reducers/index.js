
// import all the reduces
import { form } from "./forms";
import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducer";
import {organizationsReducer } from './organizationsReducer'
// export all reducers as object
export default {
    form,
    loginReducer,
    signUpReducer,
    organizationsReducer
  };
