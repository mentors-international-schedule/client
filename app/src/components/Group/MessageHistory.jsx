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
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 50vw;
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
  return (
    <StyledMessageHistory>
      {[...props.messages].reverse().map((message, index) => (
        <MessageCard
          key={index}
          message={message}
          setMessage={props.setMessage}
        />
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
