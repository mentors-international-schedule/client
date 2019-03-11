import React from "react";
import styled from "styled-components";
import AddAGroup from "./AddAGroup";
const StyledGroupsOwned = styled.div``;
export default function GroupsOwned(props) {
  const { name } = props;
  return (
    <StyledGroupsOwned>
      <h3>Groups Owned </h3>
      <AddAGroup />
      <ul>list of groups</ul>
    </StyledGroupsOwned>
  );
}
