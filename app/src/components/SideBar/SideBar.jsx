import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import OrganizationHeader from "./OrganizationHeader";
import GroupsOwned from "./GroupsOwned";
import GroupsJoined from "./GroupsJoined";
import { connect } from "react-redux";
const StyledSideBar = styled.div`
  padding-left: 30px;
  border-right: 1px solid black;
  height: 100vh;
`;

export function SideBar(props) {
  let firstname = "";
  let orgName = "";

  if (props.currentUser) {
    firstname = props.currentUser.firstname;
    const organization = props.currentUser.organization;
    orgName = organization ? organization.name : "";
  }

  return (
    <StyledSideBar>
      <ProfileHeader imageURL={""} name={firstname} />
      <OrganizationHeader imageURL={""} name={orgName} />
      <GroupsOwned />
      <GroupsJoined />
    </StyledSideBar>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.loginReducer.currentUser
  };
}

export default connect(
  mapStateToProps,
  {}
)(SideBar);
