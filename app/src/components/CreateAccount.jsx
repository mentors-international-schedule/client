import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const StyledCreateAccount = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  h2 {
    font-family: ‘Source Sans Pro’, sans-serif;
    text-align: center;
    font-size: 30px;
    color: #009DDE;
    font-weight: 900;
    margin: 0;
  }

  input {
    width: 100%;
    height: 40px;
    background: #DDE1E6;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
  }

  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 0;
  }

  p span {
    background: #fff;
    padding: 0 10px;
  }

  button {
    width: 146px;
    height: 46px;
    border-radius: 30px;
    border: none;
    background: #17BCFF;
    font-size: 16px;
    color: #fff;
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
      <h2>Create an Account</h2>

      <input
        name="email"
        type="email"
        placeholder="Enter your email..."
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
    </StyledCreateAccount>
  );
}
