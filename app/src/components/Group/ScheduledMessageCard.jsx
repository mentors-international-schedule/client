import React from "react";
import styled from "styled-components";

const ScheduledMessageCard = styled.div`
  padding: 10px;
  border: 1px solid black;
`;

export default function MessageCard(props) {
  return (
    <ScheduledMessageCard>
      <h4>Scheduled Message</h4>
      <p>{props.message.message} </p>
      <button
      onClick={() => {
        props.deleteMessage(props.message);
      }}
    >
      Delete Message from Queue
    </button>
    </ScheduledMessageCard>
  );
}
