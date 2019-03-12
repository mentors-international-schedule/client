// TEST TO SEE IF NEWEST CODE
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./reducers/index";

import App from "./App";

const { NODE_ENV } = process.env;

const rootReducers = combineReducers(reducers);
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={NODE_ENV === 'production' ? '/app' : undefined}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();