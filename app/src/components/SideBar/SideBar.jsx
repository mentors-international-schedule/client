import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import OrganizationHeader from "./OrganizationHeader";
import GroupsOwned from "./GroupsOwned";
import { connect } from "react-redux";
import { createGroup, getGroups } from "../../actions/groupActions";
import LogoutButton from "./LogoutButton";
const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 310px;
  font-family: ’Source Sans Pro’, sans-serif;
  padding: 0 20px;
`;

const SidebarTop = styled.div`
  margin-top: 10px;
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
        <ProfileHeader imageURL={props.userImage} name={firstname} />
        <LogoutButton />
      </SidebarTop>
      <OrganizationHeader imageURL={""} name={orgName} />
      <GroupsOwned groups={props.myGroups} />
      {/* <GroupsJoined /> */}
    </StyledSideBar>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.loginReducer.currentUser,
    myGroups: state.groupReducer.groups,
    userSet: state.loginReducer.userSet,
    userImage: state.loginReducer.userImage
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { createGroup, getGroups }
  )(SideBar)
);
