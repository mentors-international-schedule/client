import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login } from "../actions/loginActions";
const StyledLoginForm = styled.form``;

export class LoginForm extends React.Component {
  state = {
    inputEmail: "",
    inputPassword: ""
  };

  onEmailChange = event => {
    this.setState({ inputEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ inputPassword: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    this.props.login(this.state.email, this.state.password);
  };
  handleSignUp = event => {
    event.preventDefault();
    this.props.history.push("/signup");
  };
  render() {
    return (
      <StyledLoginForm onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.onEmailChange}
            name="email"
            type="text"
            value={this.state.inputEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={this.onPasswordChange}
            name="password"
            type="password"
            value={this.state.inputPassword}
          />
        </div>
        <button>Login</button>
        <button onClick={this.handleSignUp}> Signup</button>
      </StyledLoginForm>
    );
  }
}

const connectedForm = connect(
  () => {},
  { login }
)(LoginForm);

export default withRouter(connectedForm);
