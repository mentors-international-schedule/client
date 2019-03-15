import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getScheduledMessages,
  deleteScheduledMessage,
  clearLocalScheduledMessages
} from "../../actions/scheduleActions";
import ScheduleCard from "./ScheduleCard";
import Spinner from "../Spinner";

const StyledMessageHistory = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export function MessageHistory(props) {
  const [init, setInit] = useState(false);

  if (!init && props.currentId !== props.groupId) {
    props.clearLocalScheduledMessages();
    props.getScheduledMessages(props.groupId);
    setInit(true);
  }

  if (props.gettingMessages) {
    return <Spinner margin="0 auto" marginTop="40%" />;
  }
  return (
    <StyledMessageHistory>
      {[...props.messages].reverse().map((message, index) => (
        <ScheduleCard
          key={index}
          message={message}
          deleteScheduledMessage={props.deleteScheduledMessage}
        />
      ))}
    </StyledMessageHistory>
  );
}

function mapStateToProps(state) {
  return {
    groupId: state.groupReducer.viewingId,
    messages: state.scheduleReducer.messages,
    currentId: state.scheduleReducer.currentMessageId,
    gettingMessages: state.scheduleReducer.gettingMessages
  };
}

export default connect(
  mapStateToProps,
  { getScheduledMessages, deleteScheduledMessage, clearLocalScheduledMessages }
)(MessageHistory);
