import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getMessages,
  setMessage,
  clearLocalMessages
} from "../../actions/messageActions";
import MessageCard from "./MessageCard";
import Spinner from "../Spinner";

const StyledMessageHistory = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export function MessageHistory(props) {
  const [init, setInit] = useState(false);

  if (!init && props.currentId !== props.groupId) {
    props.clearLocalMessages();
    props.getMessages(props.groupId);
    setInit(true);
  }

  if (props.gettingMessages) {
    return <Spinner margin="0 auto" marginTop="40%" />;
  }

  if (!props.messages.length) {
    return <div>No messages on draft or sent</div>;
  }
  return (
    <StyledMessageHistory>
      {props.messages.reverse().map(message => (
        <MessageCard message={message} setMessage={props.setMessage} />
      ))}
    </StyledMessageHistory>
  );
}

function mapStateToProps(state) {
  return {
    groupId: state.groupReducer.viewingId,
    messages: state.messageReducer.messages,
    currentId: state.messageReducer.currentMessageId,
    gettingMessages: state.messageReducer.gettingMessages
  };
}

export default connect(
  mapStateToProps,
  { getMessages, setMessage, clearLocalMessages }
)(MessageHistory);
