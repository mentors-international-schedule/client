import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login } from "../actions/loginActions";
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
    this.props.login(this.state.inputEmail, this.state.inputPassword);
  };
  handleSignUp = event => {
    event.preventDefault();
    this.props.history.push("/signup");
  };
  render() {
    return (
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

        <div>
          <button>Login</button>
          <button onClick={this.handleSignUp}> Signup</button>
        </div>
      </StyledLoginForm>
    );
  }
}

const connectedForm = connect(
  () => {},
  { login }
)(LoginForm);

export default withRouter(connectedForm);
