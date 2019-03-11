import React from "react";
import styled from "styled-components";

const StyledProfileHeader = styled.div`
  display: flex;
  justify-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid black;
  }
  h3 {
    margin-left: 10px;
  }
`;
const defaultUser =
  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png";
export default function ProfileHeader(props) {
  const { imageURL, name } = props;
  return (
    <StyledProfileHeader>
      <img src={imageURL || defaultUser} />
      <h3> {name} </h3>
    </StyledProfileHeader>
  );
}
