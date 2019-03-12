import React from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import SideBar from "../components/SideBar/SideBar";
import MemberBox from "../components/MemberBox";
import Group from "../components/Group/Group";
import JoinOrganizationView from "./JoinOrganizationView";
import { setUser } from "../actions/loginActions";
const StyledAppView = styled.div`
  display: flex;
`;

export class AppView extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.setUser(user);
      debugger;
      axios.defaults.headers.common["Authorization"] = user.token;
    } else {
      localStorage.clear();
      const { history } = this.props;
      history.push("/login");
    }
  }
  render() {
    if (!this.props.currentUser) {
      return <Redirect to="/login" />;
    }
    if (!this.props.isOrganization) {
      return <JoinOrganizationView />;
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
  isOrganization: state.loginReducer.organization,
  currentUser: state.loginReducer.currentUser
});
export default connect(
  mapStateToProps,
  { setUser }
)(AppView);
