import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import GroupHeader from "./GroupHeader";
import NewMessageView from "../../views/NewMessageView";
import { setViewGroup } from "../../actions/groupActions";

const StyledGroup = styled.div`
  width: 100%;
  padding: 0 10px;
  .header {
    padding: 10px 30px 0 30px;
    border-bottom: 1px solid black;
    a {
      text-decoration: none;
      margin-right: 20px;
      color: black;
    }
    .active {
      border-bottom: 2px solid blue;
    }
  }
`;

export function Group(props) {
  const groupId = props.match.params.groupId * 1;
  if (props.groupId !== groupId) {
    props.setViewGroup(groupId);
  }
  return (
    <StyledGroup>
      <div className="header">
      <GroupHeader groups={props.groups} groupId={props.groupId} />
        <nav>
          <NavLink to={`/${groupId}/newMessage`}>New Message</NavLink>
          <NavLink to={`/${groupId}/scheduler`}>Scheduler</NavLink>
          <NavLink to={`/${groupId}/people`}>People</NavLink>
        </nav>
      </div>
      <Route path={`/${groupId}/newMessage`} component={NewMessageView} />
      <Route
        path={`/${groupId}/scheduler`}
        component={() => <div>Scheduler feature getting worked on</div>}
      />
      <Route
        path={`/${groupId}/people`}
        component={() => <div>People feature getting worked on</div>}
      />
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
