import React from "react";
import styled from "styled-components";

const StyledComposeMessageDisplay = styled.div`
  width: 400px;
  height: 300px;
  textarea {
    resize: none;
  }
`;

export default function ComposeMessageDisplay(props) {
  return (
    <StyledComposeMessageDisplay>
      <h3>Message Composer</h3>
      <textarea value={props.message} rows="3" cols="20" />
    </StyledComposeMessageDisplay>
  );
}
