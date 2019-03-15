import React from "react";
import styled from "styled-components";

const StyledCreateAccount = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-family: ‘Source Sans Pro’, sans-serif;

  h2 {
    text-align: center;
    font-size: 30px;
    color: #009dde;
    font-weight: 900;
    margin: 0;
  }

  label {
    font-size: 16px;
    font-weight: 500;
    color: #17bcff;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }

  input {
    width: 100%;
    height: 40px;
    background: #dde1e6;
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
    width: 100%;
    height: 46px;
    border-radius: 30px;
    border: none;
    background: #17bcff;
    font-size: 16px;
    color: #fff;
  }

  .google-btn {
    width: 100%;
    height: 46px;
    font-size: 16px;
    background: #ff4f00;
    color: #fff;
    border-radius: 30px;
  }
`;

export default function CreateAccount({
  moveToNextForm,
  inputEmail,
  changeEmail
}) {
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
      {/* <p>
        <span>OR</span>
      </p>
      <button className="google-btn">Sign up with Google</button> */}
    </StyledCreateAccount>
  );
}
