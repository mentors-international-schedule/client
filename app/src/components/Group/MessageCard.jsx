import React from "react";
import styled from "styled-components";

const StyledMessageCard = styled.div`
  padding: 10px;
  border: 1px solid black;
`;

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
