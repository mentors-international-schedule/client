import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ScheduledMessageHistory from "../components/Group/ScheduledMessageHistory";

// STYLED COMPONENTS
const StyledNewMessageView = styled.div`
  display: flex;
  height: 600px;
  justify-content: space-between;
  .message-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export function NewMessageView(props) {

  return (
    <StyledNewMessageView>
      <div className="message-body">
        <ScheduledMessageHistory />
      </div>
    </StyledNewMessageView>
  );
}
function mapStateToProps(state) {
}

export default connect(
  mapStateToProps,
  {}
)(NewMessageView);
