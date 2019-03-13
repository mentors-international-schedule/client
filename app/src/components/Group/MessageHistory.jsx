import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledMessageHistory = styled.div``;

export function MessageHistory(props) {
  return <StyledMessageHistory />;
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(MessageHistory);
