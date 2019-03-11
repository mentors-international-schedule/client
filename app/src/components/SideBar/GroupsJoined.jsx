import React from "react";
import styled from "styled-components";
import JoinAGroup from "./JoinAGroup";
import { NavLink } from "react-router-dom";

const StyledGroupsJoined = styled.div`
  a {
    color: black;
    display: block;
    &:hover {
      background: grey;
    }
  }
  .active {
    background: gray;
  }
`;

const tempListOfGroups = ["FBI", "BAF", "puppy club"];
export default function GroupsJoined(props) {
  return (
    <StyledGroupsJoined>
      <h3>Joined Groups </h3>
      <JoinAGroup />
      {tempListOfGroups.map(group => (
        <NavLink to={`/app/${group}`}>{group}</NavLink>
      ))}
    </StyledGroupsJoined>
  );
}
