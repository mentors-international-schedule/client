import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../../actions/loginActions";

// STYLED COMPONENTS
const LogOutBtn = styled.button`
  width: 70px;
  height: 26px;
  border-radius: 30px;
  border: none;
  background: #17bcff;
  font-size: 10px;
  color: #fff;
`;
export function LogOutButton(props) {
  return (
    <LogOutBtn
      onClick={() => {
        props.logout();
      }}
    >
      Logout
    </LogOutBtn>
  );
}

function mstp(state) {
  return {};
}

export default connect(
  mstp,
  { logout }
)(LogOutButton);
