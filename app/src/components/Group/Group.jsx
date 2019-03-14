import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import GroupHeader from "./GroupHeader";
import NewMessageView from "../../views/NewMessageView";
import { setViewGroup } from "../../actions/groupActions";
import MemberBox from "../MemberBox";
const StyledGroup = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .header {
    padding: 10px 30px 0 30px;
    border-bottom: 1px solid black;
    height: 10%;

    a {
      text-decoration: none;
      margin-right: 20px;
      color: black;
    }
    .active {
      border-bottom: 2px solid blue;
    }
  }
  .main-body {
    height: 90%;
  }
  .body-of-group {
    width: 100%;
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
        <div className="header">
          <nav>
            <NavLink to={`/${groupId}/newMessage`}>New Message</NavLink>
            <NavLink to={`/${groupId}/scheduler`}>Scheduler</NavLink>
          </nav>
        </div>

        <div className="main-body">
          <Route path={`/${groupId}/newMessage`} component={NewMessageView} />
          <Route
            path={`/${groupId}/scheduler`}
            component={() => <div>Scheduler feature getting worked on</div>}
          />
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
