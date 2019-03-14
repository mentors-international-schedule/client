import React from "react";

import LoginForm from "../components/LoginForm";

import styled from "styled-components";

const StyledLoginView = styled.div`
  width: 364px;
  font-size: 16px;
  border-radius: 3px;
  padding: 57px 92px;
  box-shadow: rgba(23, 188, 255, 0.3) 0px 0px 30px;
  margin: 0 auto;
  margin-top: 125px;
  background: #fdfdfd;
  height: 330px;
`;

export default class LoginView extends React.Component {
  render() {
    return (
      <StyledLoginView>
        <LoginForm />
      </StyledLoginView>
    );
  }
}
