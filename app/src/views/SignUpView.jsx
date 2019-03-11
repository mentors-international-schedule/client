import React from "react";
import styled from "styled-components";
import CreateAccount from "../components/CreateAccount";
import SignUpNamePasswordForm from "../components/SignUpNamePasswordForm";
const StyledSignUpView = styled.div``;

export default class SignUpView extends React.Component {
  state = {
    viewSignUpNamePasswordForm: false
  };

  setSignUpNamePasswordForm = bool =>
    this.setState({ viewSignUpNamePasswordForm: bool });

  render() {
    return (
      <StyledSignUpView>
        {this.state.viewSignUpNamePasswordForm ? (
          <SignUpNamePasswordForm />
        ) : (
          <CreateAccount
            moveToNextForm={() => this.setSignUpNamePasswordForm(true)}
          />
        )}
      </StyledSignUpView>
    );
  }
}
