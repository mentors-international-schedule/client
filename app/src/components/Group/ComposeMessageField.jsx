import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const StyledComposeMessageField = styled.span`
  input {
    width: 20%;
    display: inline-block;
    min-width: 180px;
    padding-left: 4px;
  }
`;

export function ComposeMessageField(props) {
  return (
    <StyledComposeMessageField>
      <Field
        name="message"
        component="input"
        type="text"
        placeholder="Type here to start a message"
      />
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
