import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  sendMessage,
  getMessages,
  draftMessage,
  updateInputMessage,
  deleteMessage
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
    if (props.isDraftingId) {
      props.deleteMessage(props.isDraftingId);
    }
  }
  function handleSaveMessage() {
    props.draftMessage(props.messageInput, props.groupId);
  }
  function handleChangeTextArea(event) {
    props.updateInputMessage(event.target.value);
  }
  return (
    <StyledComposeMessageDisplay>
      <h3>Message Composer</h3>
      <textarea
        onInput={handleChangeTextArea}
        value={props.messageInput}
        rows="3"
        cols="20"
      />
      <div>
        <button onClick={handleSaveMessage}>Save message</button>
        <button>Schedule</button>
        <button
          onClick={() => {
            handleSendMessage();
          }}
        >
          Send message
        </button>
      </div>
    </StyledComposeMessageDisplay>
  );
}
function mapStateToProps(state) {
  return {
    messageInput: state.form.composeMessage.values.message,
    contacts: state.memberBoxReducer.contacts,
    groupId: state.groupReducer.viewingId,
    isDraftingId: state.messageReducer.workingOnDraftId
  };
}

export default connect(
  mapStateToProps,
  { sendMessage, getMessages, draftMessage, updateInputMessage, deleteMessage }
)(ComposeMessageDisplay);
