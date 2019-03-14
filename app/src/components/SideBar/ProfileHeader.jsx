import React from "react";
import styled from "styled-components";

const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  height: 70px;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid black;
  }
  h3 {
    font-size: 24px;
    color: #313A3D;
    font-weight: 800;
  }
`;
const defaultUser =
  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png";
export default function ProfileHeader(props) {
  const { imageURL, name } = props;
  return (
    <StyledProfileHeader>
      <img src={imageURL || defaultUser} />
      <div>
        <h3> {name} </h3>
      </div>
    </StyledProfileHeader>
  );
}
