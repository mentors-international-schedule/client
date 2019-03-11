import React, { Component } from "react";
import { Route } from "react-router";
import LoginView from "./views/LoginView";
import SignUpView from './views/SignUpView';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginView} />
        <Route path='/signup' component={SignUpView} />
      </div>
    );
  }
}

export default App;
