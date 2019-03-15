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
  box-sizing: border-box;

  .message-btns{
    span {
      margin-right: 20px;
      font-weight: bold;
    }
  }
  .message-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .message-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding-top: 20px;
      box-sizing: border-box;
    }

    .history-header {
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      height: 10%;
      display: flex;
      align-items: center;
      background: #74D7FF;
      padding-right: 15px;
      font-weight: bold;
      color: white;
      border-radius: 5px 5px 0 0;
      box-sizing: border-box;
    }
    .status {
      width: 10%;
      display: inline-block;
      padding: 0 15px;

    }
    .content {
      width: 70%;
      min-width: 200px;
      display: inline-block;
      word-wrap: break-word;
      padding: 0;

    }
  }
`;
export function NewMessageView(props) {
  const { messageInput } = props;

  return (
    <StyledNewMessageView>
      <div className="message-body">
        {/* <div className="message-btns">
          <span>SENT MESSAGES</span>
          <span>DRAFT MESSAGES</span>
        </div> */}

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
