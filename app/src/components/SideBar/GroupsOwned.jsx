import React from "react";
import styled from "styled-components";
import AddAGroup from "./AddAGroup";
import { NavLink } from "react-router-dom";
import { lighten } from "polished";


const StyledGroupsOwned = styled.div`
  width: 310px;
  margin: 0 auto;
  background: #FDFDFD;
  border-radius: 0 0 5px 5px;
  box-shadow: rgba(23, 188, 255, 0.3) 0px 2px 0px;
  padding-bottom: 10px;

  h3 {
    font-size: 20px;
    color: #6C7375;
    width: 100%;
    font-weight: bold;  
    margin-bottom: 20px;
    margin-left: 15px;
  }

  a {
    color: black;
    display: block;
    margin: 15px 0;
    margin-left: 35px;
    font-size: 14px;
    text-decoration: none;
    width: 242px;
    padding: 5px 5px;
    transition: 0.15s;

    &:hover {
      background: ${lighten(0.1, "lightgray")};
    }
  }
  .active {
    background: ${lighten(0.4, "#17bcff")};
    font-weight: bold;
  }
`;

export default function GroupsOwned(props) {
  const { groups } = props;
  return (
    <StyledGroupsOwned>
      <h3>Groups You Own</h3>
      <AddAGroup />
      {groups.map(group => (
        <NavLink key={group.id} to={`/${group.id}`}>
          {/* group.name.split(" ").join("-") */}
          {group.name}
        </NavLink>
      ))}
    </StyledGroupsOwned>
  );
}
