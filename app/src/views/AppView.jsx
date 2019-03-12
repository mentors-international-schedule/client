import React from "react";
import styled from "styled-components";
import { Route } from "react-router";
import { connect } from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import MemberBox from "../components/MemberBox";
import Group from "../components/Group/Group";

import { setUser } from "../actions/loginActions";
const StyledAppView = styled.div`
  display: flex;
`;

export class AppView extends React.Component {
  componentDidMount() {
    const user = localStorage.getItem("user");
    if (user) {
      this.props.setUser(user);
    }
  }
  render() {
    if (!this.props.isOrganization) {
      return <div>Join an organization</div>;
    }
    return (
      <StyledAppView>
        <SideBar />
        <MemberBox />
        <Route path={`/:group`} component={Group} />
      </StyledAppView>
    );
  }
}

const mapStateToProps = state => ({
  isOrganization: state.loginReducer.organization
});
export default connect(
  mapStateToProps,
  { setUser }
)(AppView);
