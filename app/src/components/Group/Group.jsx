import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NewMessageView from "../../views/NewMessageView";
import { setViewGroup } from "../../actions/groupActions";
import { lighten, darken } from "polished";
import MemberBox from "../MemberBox";
const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #FDFDFD;
  font-family: ’Source Sans Pro’, sans-serif;
  padding-left: 20px;

  .header-group {
    margin-top: 20px;
    height: 10%;

    nav {
      display: flex;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-right: 20px;
      width: 200px;
      color: #313a3d;
      background: #ffffff;
      height: 60px;
      border-radius: 3px;
      border: 1px solid lightgray;
      font-weight: bold;
    }

    .active {
      color: ${darken(0.0, "#17bcff")};
      background: ${lighten(0.4, "#17bcff")};
    }
  }
  .main-body {
    height: 90%;
  }

  .body-of-group {
    width: 100%;
  }
`;

export function Group(props) {
  const groupId = props.match.params.groupId * 1;
  if (props.groupId !== groupId) {
    props.setViewGroup(groupId);
  }
  return (
    <StyledGroup>
      <div className="body-of-group">
        <div className="header-group">
          <nav>
            <NavLink className="group-nav-item" to={`/${groupId}/newMessage`}>
              <i class="fas fa-envelope" style={{marginRight:'10px'}}></i> SEND MESSAGE
            </NavLink>
            {/* <NavLink className="group-nav-item" to={`/${groupId}/scheduler`}>
              <i class="far fa-calendar" style={{marginRight:'10px'}}></i>SCHEDULER
            </NavLink> */}
          </nav>
        </div>

        <div className="main-body">
          <Route path={`/${groupId}/newMessage`} component={NewMessageView} />
          {/* <Route
            path={`/${groupId}/scheduler`}
            component={() => <div>Scheduler feature getting worked on</div>}
          /> */}
        </div>
      </div>
      <MemberBox />
    </StyledGroup>
  );
}

function mstp(state) {
  return {
    groups: state.groupReducer.groups,
    groupId: state.groupReducer.viewingId
  };
}

export default connect(
  mstp,
  { setViewGroup }
)(Group);
