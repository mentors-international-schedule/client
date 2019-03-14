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
  box-shadow: 0 0 10px lightgrey;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 314px;
  font-family: ’Source Sans Pro’; 
  margin-right: 30px;
`;

const SidebarTop = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <SidebarTop>
        <ProfileHeader imageURL={""} name={firstname} />
        <LogoutButton />
      </SidebarTop>
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
