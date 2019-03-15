import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ComposeMessageField from "../components/Group/ComposeMessageField";
import ComposeMessageDisplay from "../components/Group/ComposeMessageDisplay";
import MessageHistory from "../components/Group/MessageHistory";

const StyledNewMessageView = styled.div`
  display: flex;
  min-height: 600px;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 16px;

  .message-btns {
    span {
      margin-right: 20px;
      font-weight: bold;
    }
  }
  .message-body {
    height: 100%;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    #history-header {
      border: 1px solid gray;
      height: 70px;
      padding: 30px 0;
      display: flex;
      align-items: center;
      background: #74d7ff;
      padding-right: 15px;
      font-weight: bold;
      color: white;
      border-radius: 5px 5px 5px 5px;
      box-sizing: border-box;
    }
    .status {
      width: 10%;
      display: inline-block;
      padding: 0 30px;
    }
    .content {
      width: 100%;
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
          <div id="history-header">
            <span className="status">Status</span>
            <span className="content">Message</span>
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
