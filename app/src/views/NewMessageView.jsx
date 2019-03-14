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
    .message-content {
      height: 100%;
    }
    .history-header {
      border-top: 1px solid #313a3d;
      border-bottom: 1px solid #313a3d;
      height: 6%;
      display: flex;
      align-items: center;
    }
    .status {
      width: 10%;
      display: inline-block;
    }
    .content {
      width: 70%;
      min-width: 200px;
      display: inline-block;
      word-wrap: break-word;
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

        <div className="message-content">
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
