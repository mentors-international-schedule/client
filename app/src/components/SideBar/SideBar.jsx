import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import GroupsOwned from "./GroupsOwned";
const StyledSideBar = styled.div``;

export default function SideBar(props) {
  return (
    <StyledSideBar>
      <ProfileHeader imageURL={""} name={"connor"} />
      <ProfileHeader imageURL={""} name={"ORG"} />
      <GroupsOwned />
      <GroupsOwned name="Joined" />
    </StyledSideBar>
  );
}
