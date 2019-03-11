import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import GroupHeader from "./GroupHeader";

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
          <NavLink to={`/app/${"curentGroup"}/newMessage`}>New Message</NavLink>
          <NavLink to={`/app/${"curentGroup"}/scheduler`}>Scheduler</NavLink>
          <NavLink to={`/app/${"curentGroup"}/people`}>People</NavLink>
        </nav>
      </div>
      <Route
        path={`/app/${"curentGroup"}/newMessage`}
        component={() => <div>New message</div>}
      />
      <Route
        path={`/app/${"curentGroup"}/scheduler`}
        component={() => <div>Scheduler feature getting worked on</div>}
      />
      <Route
        path={`/app/${"curentGroup"}/people`}
        component={() => <div>People feature getting worked on</div>}
      />
    </StyledGroup>
  );
}
