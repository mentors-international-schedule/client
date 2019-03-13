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

export default function GroupsOwned(props) {
  const { groups } = props;
  return (
    <StyledGroupsOwned>
      <h3>Groups Owned </h3>
      <AddAGroup />
      {groups.map((group, index) => (
        <NavLink key={index} to={`/${group.id}`}>
          {/* group.name.split(" ").join("-") */}
          {group.name}
        </NavLink>
      ))}
    </StyledGroupsOwned>
  );
}
