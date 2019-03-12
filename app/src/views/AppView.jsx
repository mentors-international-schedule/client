import React from "react";
import styled from "styled-components";
import { Route } from "react-router";
import SideBar from "../components/SideBar/SideBar";
import MemberBox from "../components/MemberBox";
import Group from "../components/Group/Group";
const StyledAppView = styled.div`
  display: flex;
`;
export default class AppView extends React.Component {
  render() {
    return (
      <StyledAppView>
        <SideBar />
        <MemberBox />
        <Route path={`/:group`} component={Group} />
      </StyledAppView>
    );
  }
}
