import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const StyledLoginView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    margin-bottom: 15vh;
    width: 500px;
    padding: 30px;
    border: 2px solid black;
  }
`;

export default class LoginView extends React.Component {
  render() {
    return (
      <StyledLoginView>
        <div className="container">
          <LoginForm />
        </div>
      </StyledLoginView>
    );
  }
}
