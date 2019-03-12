import React from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import Group from "../components/Group/Group";
import JoinOrganizationView from "./JoinOrganizationView";
import { setUser, setAuth } from "../actions/loginActions";
const StyledAppView = styled.div`
  display: flex;
`;

export class AppView extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.setUser(user);
    } else {
      localStorage.clear();
      const { history } = this.props;
      history.push("/login");
    }
  }
  render() {
    if (!this.props.currentUser && !localStorage.getItem("user")) {
      return <Redirect to="/login" />;
    }
    // if does not belong to org takes user to screen to join or create an org
    if (!!this.props.currentUser && !this.props.currentUser.organization) {
      return <JoinOrganizationView />;
    }
    return (
      <StyledAppView>
        <SideBar />

        <Route path={`/:group`} component={Group} />
      </StyledAppView>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.loginReducer.currentUser
});
export default connect(
  mapStateToProps,
  { setUser, setAuth }
)(AppView);
