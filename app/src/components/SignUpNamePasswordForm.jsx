import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledSignUpNamePasswordForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: ‘Source Sans Pro’, sans-serif;
    text-align: center;
    font-size: 30px;
    color: #009DDE;
    font-weight: 900;
    margin: 0;
    margin-bottom: 20px;
  }

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
    margin-bottom: 30px;
  }

  button {
    width: 170px;
    height: 46px;
    border-radius: 30px;
    border: none;
    background: #17BCFF;
    font-size: 16px;
    color: #fff;
    margin-top: 30px;
  }
`;

export default function SignUpNamePasswordForm(props) {
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
    <StyledSignUpNamePasswordForm>
      <h2>Complete Profile</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        type="text"
        value={inputFirstName}
        onChange={event => changeFirstName(event.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        type="text"
        value={inputLastName}
        onChange={event => changeLastName(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={inputPassword}
        onChange={event => changePassword(event.target.value)}
      />

      <button onClick={handleSignUp}>Submit</button>
    </StyledSignUpNamePasswordForm>
  );
}
