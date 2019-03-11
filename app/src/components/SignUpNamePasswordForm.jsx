import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledSignUpNamePasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 10px;
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
      <h2>Enter Name and Password</h2>

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

      <button onClick={handleSignUp}>Complete Sign Up</button>
    </StyledSignUpNamePasswordForm>
  );
}
