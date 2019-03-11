import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const StyledLoginView = styled.div``;

export default class LoginView extends React.Component {
  render() {
    return (
      <StyledLoginView>
        <LoginForm />
      </StyledLoginView>
    );
  }
}
