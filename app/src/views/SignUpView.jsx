import React from "react";
import styled from "styled-components";
import CreateAccount from "../components/CreateAccount";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import SignUpNamePasswordForm from "../components/SignUpNamePasswordForm";
import { signUp } from "../actions/signUpActions";

const StyledSignUpView = styled.div`
  width: 364px;
  font-size: 16px;
  border-radius: 3px;
  padding: 57px 92px;
  box-shadow: rgba(23, 188, 255, 0.3) 0px 0px 30px;
  margin: 0 auto;
  margin-top: 125px;
  background: #FDFDFD;
`;

export class SignUpView extends React.Component {
  state = {
    viewSignUpNamePasswordForm: false,
    inputEmail: "",
    inputFirstName: "",
    inputLastName: "",
    inputPassword: ""
  };

  setInputEmail = currentInput => this.setState({ inputEmail: currentInput });
  setInputFirstName = currentInput =>
    this.setState({ inputFirstName: currentInput });
  setInputLastName = currentInput =>
    this.setState({ inputLastName: currentInput });
  setInputPassword = currentInput =>
    this.setState({ inputPassword: currentInput });
  setSignUpNamePasswordForm = bool =>
    this.setState({ viewSignUpNamePasswordForm: bool });

  handleSignUp = e => {
    e.preventDefault();

    this.props.signUp(
      this.state.inputEmail,
      this.state.inputFirstName,
      this.state.inputLastName,
      this.state.inputPassword
    );
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <StyledSignUpView>
        {this.state.viewSignUpNamePasswordForm ? (
          <SignUpNamePasswordForm
            inputFirstName={this.state.inputFirstName}
            inputLastName={this.state.inputLastName}
            inputPassword={this.state.inputPassword}
            changeFirstName={this.setInputFirstName}
            changeLastName={this.setInputLastName}
            changePassword={this.setInputPassword}
            handleSignUp={this.handleSignUp}
          />
        ) : (
          <CreateAccount
            inputEmail={this.state.inputEmail}
            changeEmail={this.setInputEmail}
            moveToNextForm={() => this.setSignUpNamePasswordForm(true)}
          />
        )}
      </StyledSignUpView>
    );
  }
}

const mstp = state => ({
  isLoggedIn: !!state.loginReducer.currentUser
});
export default connect(
  mstp,
  { signUp }
)(SignUpView);
