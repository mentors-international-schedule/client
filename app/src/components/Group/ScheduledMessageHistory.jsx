import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import {
//   clearLocalMessages
// } from "../../actions/messageActions";

import {
  getScheduledMessages,
  deleteScheduledMessage
} from "../../actions/scheduleActions";

import ScheduledMessageCard from "./ScheduledMessageCard";
import Spinner from "../Spinner";

// STYLED COMPONENTS
const StyledMessageHistory = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export function MessageHistory(props) {
  const [init, setInit] = useState(false);

  if (!init && props.currentId !== props.groupId) {
    // props.clearLocalMessages();
    // // props.clearLocalmessages();
    props.getMessages(props.groupId);
    // props.getmessages(())
    setInit(true);
  }

  if (props.gettingMessages) {
    return <Spinner margin="0 auto" marginTop="40%" />;
  }

  if (!props.messages.length) {
    return <div>You have not scheduled any messages yet.</div>;
  }

  return (
    <StyledMessageHistory>
      {props.messages.reverse().map(message=> (
        <ScheduledMessageCard message={message} deleteMessage={props.deleteMessage} />
      ))}
    </StyledMessageHistory>
  );
}

function mapStateToProps(state) {
  return {
    groupId: state.groupReducer.viewingId,
    currentId: state.messageReducer.currentMessageId,
    messages: state.scheduleReducer.messages,
    gettingMessages: state.scheduleReducer.gettingMessages,
    deletingMessage: state.scheduleReducer.deletingMessage
  };
}

export default connect(
  mapStateToProps,
  { getMessages:getScheduledMessages, deleteScheduledMessage }
)(MessageHistory);
