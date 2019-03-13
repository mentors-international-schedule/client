import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login } from "../actions/loginActions";

import styled from "styled-components";

const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-size: 16px;
    font-weight: 500;
    color: #8E8E93;
    font-family: ‘Source Sans Pro’, sans-serif;
    margin: 10px 0;
  }

  input {
    width: 100%;
    height: 40px;
    background: #DDE1E6;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
  }

  .last-input {
    margin-bottom: 25px;
  }

  h2 {
    font-family: ‘Source Sans Pro’, sans-serif;
    text-align: center;
    font-size: 32px;
    color: #009DDE;
    font-weight: 900;
    margin: 0 10px;
  }

  .login-btn {
    width: 146px;
    height: 46px;
    border-radius: 30px;
    border: none;
    background: #17BCFF;
    font-size: 16px;
    color: #fff;
  }
  
  .signup-btn {
    width: 146px;
    height: 46px;
    border: none;
    background: none;
    font-size: 16px;
    color: #17BCFF;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <StyledLoginForm onSubmit={this.handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          onChange={this.onEmailChange}
          name="email"
          type="email"
          value={this.state.inputEmail}
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={this.onPasswordChange}
          name="password"
          type="password"
          value={this.state.inputPassword}
          className="last-input"
        />

        <ButtonContainer>
          <button type="submit"
            className="login-btn">Login</button>
          <button onClick={this.handleSignUp}
            className="signup-btn">Signup</button>
        </ButtonContainer>
      </StyledLoginForm>
    );
  }
}

const connectedForm = connect(
  () => {},
  { login }
)(LoginForm);

export default withRouter(connectedForm);
