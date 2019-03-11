import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledSignUpNamePasswordForm = styled.div``;

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
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          value={inputFirstName}
          onChange={event => changeFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          value={inputLastName}
          onChange={event => changeLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={inputPassword}
          onChange={event => changePassword(event.target.value)}
        />
      </div>
      <button onClick={handleSignUp}>Complete Sign Up</button>
    </StyledSignUpNamePasswordForm>
  );
}
