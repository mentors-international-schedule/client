import axios from "axios";
import {SIGNING_UP, SIGN_UP, SUCCESS_SIGN_UP, FAIL_SIGN_UP} from './actionTypes'


export const signUp = (email, firstName, lastName, password) => dispatch => {
    dispatch({type:SIGNING_UP});
    // axios calls for sign up
}