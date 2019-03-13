import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { createGroup } from "../../actions/groupActions";
const StyledAddAGroup = styled.div`
  display: flex;
  align-items: baseline;
  div {
    padding-right: 10px;
  }
`;
export function AddAGroup(props) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function createNewGroup() {
    props.createGroup(inputValue);
  }
  return (
    <StyledAddAGroup>
      <div onClick={createNewGroup}>+ </div>
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="Make a group"
      />
    </StyledAddAGroup>
  );
}

export default connect(
  () => {},
  { createGroup }
)(AddAGroup);
