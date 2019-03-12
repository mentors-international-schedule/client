import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import GroupHeader from "./GroupHeader";
import NewMessageView from "../../views/NewMessageView";
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
export default function Group(props) {
  console.log(props);
  return (
    <StyledGroup>
      <div className="header">
        <GroupHeader name={"Group Name"} handle={"Group Handle"} />
        <nav>
          <NavLink to={`/${"curentGroup"}/newMessage`}>New Message</NavLink>
          <NavLink to={`/${"curentGroup"}/scheduler`}>Scheduler</NavLink>
          <NavLink to={`/${"curentGroup"}/people`}>People</NavLink>
        </nav>
      </div>
      <Route
        path={`/${"curentGroup"}/newMessage`}
        component={NewMessageView}
      />
      <Route
        path={`/${"curentGroup"}/scheduler`}
        component={() => <div>Scheduler feature getting worked on</div>}
      />
      <Route
        path={`/${"curentGroup"}/people`}
        component={() => <div>People feature getting worked on</div>}
      />
    </StyledGroup>
  );
}
