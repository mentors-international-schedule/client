import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledSignUpNamePasswordForm = styled.div``;

export function SignUpNamePasswordForm(props) {
  return (
    <StyledSignUpNamePasswordForm>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button>Complete Sign Up</button>
    </StyledSignUpNamePasswordForm>
  );
}

const mstp = state => {};

const ConnectedSignUpNamePasswordForm = connect(
  mstp,
  {}
)(SignUpNamePasswordForm);

export default reduxForm({ form: "signUpNamePassword" })(
  ConnectedSignUpNamePasswordForm
);
