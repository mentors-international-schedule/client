import React from "react";
import styled from "styled-components";

import { lighten } from "polished";

const StyledMessageCard = styled.div`
  box-sizing: content-box;
  display: flex;
  border-bottom: 1px solid lightgray;
  height: auto;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;

  button {
    width: 20%;
    height: 26px;
    border-radius: 10px;
    border: none;
    background: #17bcff;
    font-size: 13px;
    color: #fff;
    font-family: ’Source Sans Pro’, sans-serif;
    font-weight: bold;
    margin-left: 10px;

    &:hover {
      background: ${lighten(0.1, "#17bcff")};
    }
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
