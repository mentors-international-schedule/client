import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import DateTimePicker from "react-datetime-picker";
import {
  sendMessage,
  getMessages,
  draftMessage,
  updateInputMessage,
  deleteMessage
} from "../../actions/messageActions";
import { scheduleMessage } from "../../actions/scheduleActions";
import Spinner from "../Spinner";
import { lighten } from "polished";

const StyledComposeMessageDisplay = styled.div`
  background: whitesmoke;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0 0 5px 5px;
  button {
    width: 150px;
    height: 26px;
    border-radius: 10px;
    border: none;
    background: #17bcff;
    font-size: 13px;
    color: #fff;
    font-family: ’Source Sans Pro’, sans-serif;
    font-weight: bold;
    margin: 0 25px;
    margin-top: 30px;

    &:hover {
      background: ${lighten(0.1, "#17bcff")};
    }
  }
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
    if (props.isDraftingId) {
      props.deleteMessage(props.isDraftingId);
    }
  }
  function handleChangeTextArea(event) {
    props.updateInputMessage(event.target.value);
  }

  // const [date, setDate] = useState(new Date());
  // function handleScheduleMessage() {
  //   const sendDate = {
  //     hour: date.getHours(),
  //     minute: date.getMinutes(),
  //     dayOfWeek: date.getDay()
  //   };
  //   // lets schedule a message :)
  //   props.scheduleMessage({
  //     ...sendDate,
  //     message: props.messageInput,
  //     contact_ides: filterContacts(),
  //     group_id: props.groupId
  //   });
  // }
  return (
    <StyledComposeMessageDisplay>
      <h3>Create a New Message</h3>
      {props.draftingMessage || props.sendingMessage ? (
        <Spinner marginTop="30%" />
      ) : (
        <>
          <textarea
            onInput={handleChangeTextArea}
            value={props.messageInput}
            rows="3"
            cols="20"
          />
          <div>
            <button onClick={handleSaveMessage}>Save message</button>

            <button
              onClick={() => {
                handleSendMessage();
              }}
            >
              Send message
            </button>
            {/* <DateTimePicker
              onChange={date => {
                setDate(date);
              }}
              value={date}
            />
            <button onClick={handleScheduleMessage}>Schedule</button> */}
          </div>
        </>
      )}

      {!!error ? <p className="error-message">{error}</p> : <> </>}
    </StyledComposeMessageDisplay>
  );
}
function mapStateToProps(state) {
  return {
    messageInput: state.form.composeMessage.values.message,
    contacts: state.memberBoxReducer.contacts,
    groupId: state.groupReducer.viewingId,
    isDraftingId: state.messageReducer.workingOnDraftId,
    draftingMessage: state.messageReducer.draftingMessages,
    sendingMessage: state.messageReducer.sendingMessage
  };
}

export default connect(
  mapStateToProps,
  {
    sendMessage,
    getMessages,
    draftMessage,
    updateInputMessage,
    deleteMessage,
    scheduleMessage
  }
)(ComposeMessageDisplay);
