import React from "react";
import styled from "styled-components";

const StyledProfileHeader = styled.div`
  display: flex;
  justify-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 1px solid black;
  }
  h3 {
    margin-left: 10px;
  }
  .header-text {
    padding: 20px 20px;
    h3 {
      margin: 0px;
    }
    h4 {
      margin: 0px;
    }
  }
`;
const defaultUser =
  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png";
export default function ProfileHeader(props) {
  const { imageURL, groups, groupId } = props;
  const group = groups.filter(group => group.id === Number(groupId))[0];
  return (
    <StyledProfileHeader>
      <img src={imageURL || defaultUser} />
      <div className="header-text">
        <h3> {group ? group.name : ""} </h3>
        <h4>{`@${group ? group.name : ""}`}</h4>
      </div>
    </StyledProfileHeader>
  );
}
