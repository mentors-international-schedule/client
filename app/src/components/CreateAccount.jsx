import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledCreateAccount = styled.div`
  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  p span {
    background: #fff;
    padding: 0 10px;
  }
`;

export default function CreateAccount({
  moveToNextForm,
  inputEmail,
  changeEmail
}) {
  console.log(inputEmail);
  return (
    <StyledCreateAccount>
      <div>
        <input
          name="email"
          type="text"
          placeholder="Enter your phone number or email"
          value={inputEmail}
          onChange={event => {
            changeEmail(event.target.value);
          }}
        />
        <button onClick={moveToNextForm}>Continue</button>
        <p>
          <span>OR</span>
        </p>
        <button>Sign up with Google</button>
      </div>
    </StyledCreateAccount>
  );
}
