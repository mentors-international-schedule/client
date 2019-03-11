import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers/index";
import thunk from "redux-thunk";
import authenticate from "./reduxMiddleware/authenticate";

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(),
  compose(
    applyMiddleware(thunk, authenticate),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
