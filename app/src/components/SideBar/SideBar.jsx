import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import OrganizationHeader from "./OrganizationHeader";
import GroupsOwned from "./GroupsOwned";
import GroupsJoined from "./GroupsJoined";
import { connect } from "react-redux";
import { createGroup, getGroups } from "../../actions/groupActions";
import LogoutButton from "./LogoutButton";
const StyledSideBar = styled.div`
  padding-left: 30px;
  border-right: 1px solid black;
  height: 100vh;
`;

export function SideBar(props) {
  let firstname = "";
  let orgName = "";
  const [init, setInit] = useState(false);
  if (props.userSet && !init) {
    props.getGroups();
    setInit(true);
  }
  if (props.currentUser) {
    firstname = props.currentUser.firstname;
    const organization = props.currentUser.organization;
    orgName = organization ? organization.name : "";
  }

  return (
    <StyledSideBar>
      <ProfileHeader imageURL={""} name={firstname} />
      <LogoutButton />
      <OrganizationHeader imageURL={""} name={orgName} />
      <GroupsOwned groups={props.myGroups} />
      <GroupsJoined />
    </StyledSideBar>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.loginReducer.currentUser,
    myGroups: state.groupReducer.groups,
    userSet: state.loginReducer.userSet
  };
}

export default withRouter(connect(
  mapStateToProps,
  { createGroup, getGroups }
)(SideBar));
