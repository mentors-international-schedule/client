
// import all the reduces
import { form } from "./forms";
import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducer";
import { organizationsReducer } from './organizationsReducer';
import { memberBoxReducer } from './memberBoxReducer';
import { groupReducer } from '../reducers/groupReducer';

// export all reducers as object
export default {
    form,
    loginReducer,
    signUpReducer,
    organizationsReducer,
    memberBoxReducer,
    groupReducer,
  };
