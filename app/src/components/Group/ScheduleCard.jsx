import React from "react";
import styled from "styled-components";

import { lighten } from "polished";

const StyledMessageCard = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

    &:hover {
      background: ${lighten(0.1, "#17bcff")};
    }
  }
`;
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export default function MessageCard(props) {
  return (
    <StyledMessageCard>
      <span className="status">Scheduled</span>
      <span className="content">{props.message.message}</span>
      <span className="display-date">
        <span className="display-day">
          {daysInWeek[props.message.dayOfWeek]}
        </span>
        <span className="display-time">
          {props.message.hour}:{props.message.minute}
        </span>
      </span>

      <button
        onClick={() => {
          props.deleteScheduledMessage(props.message.id);
        }}
      >
        DELETE
      </button>
    </StyledMessageCard>
  );
}
