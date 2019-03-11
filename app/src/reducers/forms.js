import { reducer as formReducer } from "redux-form";


const form = formReducer.plugin({
    // make custom reducers for redux forms
    loginForm: (state, action) => {
        //login form reducer here
    }
  });

  export {form};// must be called form in the object of reducers to be combined