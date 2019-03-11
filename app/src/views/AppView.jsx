import React from "react";
import styled from "styled-components";
import { Route } from "react-router";
import SideBar from "../components/SideBar/SideBar";
import Group from "../components/Group";
const StyledAppView = styled.div`
  display: flex;
`;
export default class AppView extends React.Component {
  render() {
    return (
      <StyledAppView>
        <SideBar />
        <Route path={`/app/:group`} component={Group} />
      </StyledAppView>
    );
  }
}
