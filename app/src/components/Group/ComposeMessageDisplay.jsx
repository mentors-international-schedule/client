import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  sendMessage,
  getMessages,
  draftMessage
} from "../../actions/messageActions";

const StyledComposeMessageDisplay = styled.div`
  background: lightgrey;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 300px;
  textarea {
    resize: none;
    height: 150px;
    width: 80%;
  }
`;

export function ComposeMessageDisplay(props) {
  function filterContacts() {
    return props.contacts
      .filter(contact => !!contact.isChecked)
      .map(contact => contact.id);
  }

  function handleSendMessage() {
    props.sendMessage(filterContacts(), props.messageInput, props.groupId);
  }
  return (
    <StyledComposeMessageDisplay>
      <h3>Message Composer</h3>
      <textarea value={props.messageInput} rows="3" cols="20" />
      <div>
        <button>Save message</button>
        <button>Schedule</button>
        <button onClick={handleSendMessage}>Send message</button>
      </div>
    </StyledComposeMessageDisplay>
  );
}
function mapStateToProps(state) {
  return {
    messageInput: state.form.composeMessage.values.message,
    contacts: state.memberBoxReducer.contacts,
    groupId: state.groupReducer.viewingId
  };
}

export default connect(
  mapStateToProps,
  { sendMessage, getMessages, draftMessage }
)(ComposeMessageDisplay);
