// TEST TO SEE IF NEWEST CODE
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./reducers/index";
import authenticate from './reduxMiddleware/authenticate'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'

const { NODE_ENV } = process.env;

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk, authenticate),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
let persistor = persistStore(store)

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router basename={NODE_ENV === 'production' ? '/app' : undefined}>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();