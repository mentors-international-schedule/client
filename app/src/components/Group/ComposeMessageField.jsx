import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const StyledComposeMessageField = styled.span`
  input {
    width: 20%;
    display: inline-block;
  }
`;

export function ComposeMessageField(props) {
  return (
    <StyledComposeMessageField>
      <Field name="message" component="input" type="text" />
    </StyledComposeMessageField>
  );
}
function mapStateToProps(state) {
  return {};
}
const ConnectComponent = connect(
  mapStateToProps,
  {}
)(ComposeMessageField);

export default reduxForm({ form: "composeMessage" })(ConnectComponent);
