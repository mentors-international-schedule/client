import React, { useState } from "react";
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
  .error-message {
    border: 1px solid red;
    color: red;
  }
`;

export function ComposeMessageDisplay(props) {
  const [error, setError] = useState("");
  function filterContacts() {
    return props.contacts
      .filter(contact => !!contact.isChecked)
      .map(contact => contact.id);
  }

  function handleSendMessage() {
    const filteredContacts = filterContacts();
    if (filteredContacts.length) {
      setError("");
      props.sendMessage(filterContacts(), props.messageInput, props.groupId);

      if (props.isDraftingId) {
        props.deleteMessage(props.isDraftingId);
      }
    } else {
      setError("To send a message please select at least one valid contact");
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
      {!!error ? <p className="error-message">{error}</p> : <> </>}
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
