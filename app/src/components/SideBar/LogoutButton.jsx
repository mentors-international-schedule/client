import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../../actions/loginActions";

import { lighten } from "polished";

// STYLED COMPONENTS
const LogOutBtn = styled.button`
  width: 70px;
  height: 26px;
  border-radius: 10px;
  border: none;
  background: #F5A623;
  font-size: 13px;
  color: #fff;
  font-family: ’Source Sans Pro’, sans-serif;
  font-weight: bold;
  transition: 0.15s;

  &:hover {
      background: ${lighten(0.1, "#F5A623")};
    }
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
