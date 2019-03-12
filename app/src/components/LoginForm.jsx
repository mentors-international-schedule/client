import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login } from "../actions/loginActions";

import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

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
    this.props.login(this.state.inputEmail, this.state.inputPassword, () => this.props.history.push("/"));
  };

  handleSignUp = event => {
    event.preventDefault();
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <StyledLoginForm onSubmit={this.handleSubmit}>
          <h2>Login</h2>

          <label htmlFor="email">Email</label>
          <input
            onChange={this.onEmailChange}
            name="email"
            type="text"
            value={this.state.inputEmail}
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={this.onPasswordChange}
            name="password"
            type="password"
            value={this.state.inputPassword}
          />

          <button>Login</button>
        </StyledLoginForm>
        <button onClick={this.handleSignUp}>Signup</button>
      </div>
    );
  }
}

const connectedForm = connect(
  () => {},
  { login }
)(LoginForm);

export default withRouter(connectedForm);
