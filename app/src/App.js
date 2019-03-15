import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router";
import LoginView from "./views/LoginView";
import SignUpView from './views/SignUpView';
import AppView from './views/AppView'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`;
const StyledApp = styled.div`

`;

const PrivateRoute = ( { component: Component, ...rest } ) => (
  <Route

    { ...rest }
    render={ props =>
      localStorage.getItem( "token" ) ? (
        <Component { ...props } />
      ) : (

          <Redirect to="/login" />
        )
    }
  />
)

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Switch>
          <Route path='/login' component={ LoginView } />
          <Route path='/signup' component={ SignUpView } />
          <PrivateRoute path='/' component={ AppView } />
        </Switch>
      </StyledApp>
    );
  }
}



export default App
