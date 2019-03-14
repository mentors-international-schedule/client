import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import MemberBox from "../components/MemberBox";
import ComposeMessageField from "../components/Group/ComposeMessageField";
import ComposeMessageDisplay from "../components/Group/ComposeMessageDisplay";
import MessageHistory from "../components/Group/MessageHistory";

const StyledNewMessageView = styled.div`
  display: flex;
  height: 600px;
  justify-content: space-between;
  .message-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .history-header {
      margin-right: 17px;
    }
    .status {
      width: 10%;
      display: inline-block;
    }
    .content {
      width: 60%;
      display: inline-block;
    }
  }
`;
export function NewMessageView(props) {
  const { messageInput } = props;

  return (
    <StyledNewMessageView>
      <div className="message-body">
        <div>
          <span>SENT MESSAGES</span>
          <span>DRAFTMESSAGES</span>
        </div>

        <div>
          <div className="history-header">
            <span className="status">Status</span>
            <span className="content">Content</span>
            <ComposeMessageField className="main-input" />
          </div>

          {!!messageInput ? <ComposeMessageDisplay /> : <MessageHistory />}
        </div>
      </div>
    </StyledNewMessageView>
  );
}
function mapStateToProps(state) {
  if (!!state.form.composeMessage && state.form.composeMessage.values) {
    return {
      messageInput: state.form.composeMessage.values.message
    };
  }
  return {
    messageInput: false
  };
}

export default connect(
  mapStateToProps,
  {}
)(NewMessageView);
