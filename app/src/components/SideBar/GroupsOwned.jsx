import React from "react";
import styled from "styled-components";
import AddAGroup from "./AddAGroup";
import { NavLink } from "react-router-dom";

const StyledGroupsOwned = styled.div`
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

const tempListOfGroups = ["Pie", "Fireball", "red"];
export default function GroupsOwned(props) {
  const { name } = props;
  return (
    <StyledGroupsOwned>
      <h3>Groups Owned </h3>
      <AddAGroup />
      {tempListOfGroups.map(group => (
        <NavLink to={`/app/${group}`}>{group}</NavLink>
      ))}
    </StyledGroupsOwned>
  );
}
