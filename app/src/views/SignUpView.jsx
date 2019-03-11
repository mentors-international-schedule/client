import React from "react";
import styled from "styled-components";
import CreateAccount from "../components/CreateAccount";
import { connect } from "react-redux";
import SignUpNamePasswordForm from "../components/SignUpNamePasswordForm";
import { signUp } from "../actions/signUpActions";

const StyledSignUpView = styled.div`
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

  handleSignUp = () => {
    this.props.signUp(
      this.state.inputEmail,
      this.state.inputFirstName,
      this.state.inputLastName,
      this.state.inputPassword
    );
  };
  render() {
    return (
      <StyledSignUpView>
        <div className="container">
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
        </div>
      </StyledSignUpView>
    );
  }
}

const mstp = state => {};
export default connect(
  mstp,
  { signUp }
)(SignUpView);