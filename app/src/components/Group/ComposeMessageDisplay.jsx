import React from "react";
import styled from "styled-components";

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

export default function ComposeMessageDisplay(props) {
  return (
    <StyledComposeMessageDisplay>
      <h3>Message Composer</h3>
      <textarea value={props.message} rows="3" cols="20" />
      <div>
        <button>Save message</button>
        <button>Schedule</button>
        <button> Send message</button>
      </div>
    </StyledComposeMessageDisplay>
  );
}
