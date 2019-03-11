// import all the reduces
import { form } from "./forms";
import {loginReducer} from './loginReducer';
import {signUpReducer} from './signUpReducer'
// export all reducers as object
const reducers = { form, loginReducer, signUpReducer };

export default reducers;
