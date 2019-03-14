import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Spinner from "./Spinner";

const StyledSignUpNamePasswordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ‘Source Sans Pro’, sans-serif;

  h2 {
    text-align: center;
    font-size: 30px;
    color: #009dde;
    font-weight: 900;
    margin: 0;
    margin-bottom: 30px;
  }

  label {
    font-size: 16px;
    color: #17bcff;
    font-weight: 700;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    background: #dde1e6;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
    margin-bottom: 25px;
  }

  button {
    width: 170px;
    height: 46px;
    border-radius: 30px;
    border: none;
    background: #17bcff;
    font-size: 16px;
    color: #fff;
    margin-top: 5px;
  }
`;

export function SignUpNamePasswordForm(props) {
  const {
    inputFirstName,
    inputLastName,
    inputPassword,
    changeFirstName,
    changeLastName,
    changePassword,
    handleSignUp
  } = props;
  return (
    <StyledSignUpNamePasswordForm onSubmit={handleSignUp}>
      <h2>Complete Your Profile</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        type="text"
        value={inputFirstName}
        required
        onChange={event => changeFirstName(event.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        type="text"
        value={inputLastName}
        required
        onChange={event => changeLastName(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        required
        name="password"
        type="password"
        value={inputPassword}
        onChange={event => changePassword(event.target.value)}
      />
      {props.signingUp ? (
        <Spinner size="6px" color="#17BCFF" marginTop="15px" margin="0 auto" />
      ) : (
        <button>Submit</button>
      )}
    </StyledSignUpNamePasswordForm>
  );
}
function mstp(state) {
  return {
    signingUp: state.signUpReducer.signingUp
  };
}

export default connect(
  mstp,
  {}
)(SignUpNamePasswordForm);
