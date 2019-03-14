import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../../actions/loginActions";
export function LogOutButton(props) {
  return (
    <button
      onClick={() => {
        props.logout();
      }}
    >
      Logout
    </button>
  );
}

function mstp(state) {
  return {};
}

export default connect(
  mstp,
  { logout }
)(LogOutButton);
