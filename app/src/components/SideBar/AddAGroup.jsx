import React, { useState } from "react";
import styled from "styled-components";

const StyledAddAGroup = styled.div`
  display: flex;
  align-items: baseline;
  div {
    padding-right: 10px;
  }
`;
export default function AddAGroup() {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledAddAGroup>
      <div>+ </div>
      <input placeholder="" />

      <p>add a group</p>
    </StyledAddAGroup>
  );
}
