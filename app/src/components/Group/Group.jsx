import React from "react";
import styled from "styled-components";
import GroupHeader from "./GroupHeader";
const StyledGroup = styled.div`
  width: 100%;
  padding: 0 10px;
  .header {
    padding: 10px 30px;
    border-bottom: 1px solid black;
  }
`;
export default function Group(props) {
  console.log(props);
  return (
    <StyledGroup>
      <div className="header">
        <GroupHeader name={"Group Name"} handle={"Group Handle"} />
      </div>

      <div>sdf</div>
    </StyledGroup>
  );
}
