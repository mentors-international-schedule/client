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
  width: 100%;
  margin-top: 20px;
  header {
    display: flex;
    justify-content: space-between;
    .space {
      width: 20%;
    }
  }
  .status {
    width: 100px;
    padding-left: 10px;
  }
  .content {
    width: 250px;
  }
  .display-day {
    padding-right: 40px;
    width: 100px;
  }
  .display-time {
    width: 50px;
  }
  .schedule-header {
    border: 1px solid gray;
    height: 70px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    background: #74d7ff;
    padding-right: 15px;
    font-weight: bold;
    color: white;
    border-radius: 5px 5px 5px 5px;
    box-sizing: border-box;
  }
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
      <header className="schedule-header">
        <span className="status">Status </span>
        <span className="content">Message</span>
        <span className="display-date">
          <span className="display-day">day</span>
          <span className="display-time">time</span>
        </span>
        <span className="space" />
      </header>
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
