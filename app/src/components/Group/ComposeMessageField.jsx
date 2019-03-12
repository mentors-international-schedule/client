import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const StyledComposeMessageField = styled.div``;

export function ComposeMessageField(props) {
  return (
    <div>
      <Field name="message" component="input" type="text" />
      <div />
    </div>
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
