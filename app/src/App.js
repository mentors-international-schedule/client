import React, { Component } from "react";
import { Route } from "react-router";
import LoginView from "./views/LoginView";
import SignUpView from './views/SignUpView';
import AppView from './views/AppView'
import styled from 'styled-components'

const StyledApp = styled.div`

`
class App extends Component {
  render() {
    return (
      <StyledApp>
        <Route path='/login' component={LoginView} />
        <Route path='/signup' component={SignUpView} />
        <Route path='/app' component={AppView} />
      </StyledApp>
    );
  }
}

export default App;
