import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getMessages, setMessage } from "../../actions/messageActions";
import MessageCard from "./MessageCard";
const StyledMessageHistory = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

export function MessageHistory(props) {
  const [init, setInit] = useState(false);
  if (!init) {
    props.getMessages(props.groupId);
    setInit(true);
  }

  if (!!props.messages.messages || props.messages.config) {
    debugger;
    return <div>No messages on draft or sent</div>;
  }
  debugger;
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
    messages: state.messageReducer.messages
  };
}

export default connect(
  mapStateToProps,
  { getMessages, setMessage }
)(MessageHistory);
