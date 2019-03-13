import React from "react";
import styled from "styled-components";

const StyledMessageCard = styled.div``;

export default function MessageCard(props) {
  //sent message
  if (props.message.sent) {
    return (
      <StyledMessageCard>
        <p>{props.message.message} </p>
      </StyledMessageCard>
    );
  }
  //draft
  return (
    <StyledMessageCard>
      <p>{props.message.message} </p>
      <button onClick={() => props.setMessage(props.message)}>
        Edit Draft
      </button>
    </StyledMessageCard>
  );
}
