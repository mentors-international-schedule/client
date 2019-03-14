import React from "react";
import styled from "styled-components";

const StyledMessageCard = styled.div`
  display: flex;
  padding: 10px 0;
  button {
    width: 20%;
    display: inline-block;
  }
`;

export default function MessageCard(props) {
  //sent message
  if (props.message.sent) {
    return (
      <StyledMessageCard>
        <span className="status">Sent</span>
        <span className="content">{props.message.message}</span>
      </StyledMessageCard>
    );
  }
  //draft
  debugger;
  return (
    <StyledMessageCard>
      <span className="status">Draft</span>
      <span className="content">{props.message.message}</span>

      <button
        onClick={() => {
          props.setMessage(props.message);
        }}
      >
        Edit Draft
      </button>
    </StyledMessageCard>
  );
}
