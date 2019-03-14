import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getMessages,
  setMessage,
  clearLocalMessages
} from "../../actions/messageActions";
import MessageCard from "./MessageCard";
const StyledMessageHistory = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
`;

export function MessageHistory(props) {
  const [init, setInit] = useState(false);

  if (!init && props.currentId !== props.groupId) {
    debugger;
    props.clearLocalMessages();
    props.getMessages(props.groupId);
    setInit(true);
  }

  if (!!props.messages.messages || props.messages.config) {
    return <div>No messages on draft or sent</div>;
  }
  return (
    <StyledMessageHistory>
      {props.messages.map(message => (
        <MessageCard message={message} setMessage={props.setMessage} />
      ))}
    </StyledMessageHistory>
  );
}

function mapStateToProps(state) {
  return {
    groupId: state.groupReducer.viewingId,
    messages: state.messageReducer.messages,
    currentId: state.messageReducer.currentMessageId
  };
}

export default connect(
  mapStateToProps,
  { getMessages, setMessage, clearLocalMessages }
)(MessageHistory);
