import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import OrganizationHeader from "./OrganizationHeader";
import GroupsOwned from "./GroupsOwned";
import GroupsJoined from "./GroupsJoined";
const StyledSideBar = styled.div`
  padding-left: 30px;
  border-right: 1px solid black;
  height: 100vh;
`;

export default function SideBar(props) {
  return (
    <StyledSideBar>
      <ProfileHeader imageURL={""} name={"connor"} />
      <OrganizationHeader imageURL={""} name={"ORG"} />
      <GroupsOwned />
      <GroupsJoined />
    </StyledSideBar>
  );
}
