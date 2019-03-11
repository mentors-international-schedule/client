import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import GroupsOwned from "./GroupsOwned";
import GroupsJoined from "./GroupsJoined";
const StyledSideBar = styled.div``;

export default function SideBar(props) {
  return (
    <StyledSideBar>
      <ProfileHeader imageURL={""} name={"connor"} />
      <ProfileHeader imageURL={""} name={"ORG"} />
      <GroupsOwned />
      <GroupsJoined />
    </StyledSideBar>
  );
}
