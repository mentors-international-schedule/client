import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NewMessageView from "../../views/NewMessageView";
import { setViewGroup } from "../../actions/groupActions";
import { lighten, darken } from "polished";
import MemberBox from "../MemberBox";
import ScheduleHistory from "./ScheduleHistory";

const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fdfdfd;
  font-family: ’Source Sans Pro’, sans-serif;
  padding-left: 20px;
  height: 100vh;

  .header-group {
    padding-top: 20px;
    height: 12%;
    box-sizing: border-box;

    nav {
      display: flex;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-right: 20px;
      width: 200px;
      color: #313a3d;
      background: #ffffff;
      height: 60px;
      border-radius: 3px;
      border: 1px solid lightgray;
      font-weight: bold;
    }

    .active {
      color: ${darken(0.0, "#17bcff")};
      background: ${lighten(0.4, "#17bcff")};
    }
  }
  .main-body {
    height: 90%;
  }

  .body-of-group {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export function Group(props) {
  const groupId = props.match.params.groupId * 1;
  if (props.groupId !== groupId) {
    props.setViewGroup(groupId);
  }
  return (
    <StyledGroup>
      <div className="body-of-group">
        <div className="header-group">
          <nav>
            <NavLink className="group-nav-item" to={`/${groupId}/newMessage`}>
              <i className="fas fa-envelope" style={{ marginRight: "10px" }} />{" "}
              SEND MESSAGE
            </NavLink>
            <NavLink className="group-nav-item" to={`/${groupId}/scheduler`}>
              <i className="far fa-calendar" style={{ marginRight: "10px" }} />
              SCHEDULER
            </NavLink>
          </nav>
        </div>

        <div className="main-body">
          <Route path={`/${groupId}/newMessage`} component={NewMessageView} />
          <Route path={`/${groupId}/scheduler`} component={ScheduleHistory} />
        </div>
      </div>
      <MemberBox />
    </StyledGroup>
  );
}

function mstp(state) {
  return {
    groups: state.groupReducer.groups,
    groupId: state.groupReducer.viewingId
  };
}

export default connect(
  mstp,
  { setViewGroup }
)(Group);
