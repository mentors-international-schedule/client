import React from "react";
import styled from "styled-components";

const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin-left: 15px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid black;
  }
  h3 {
    font-size: 22px;
    color: #313a3d;
    font-weight: 800;
    margin-left: 10px;
  }
`;
const defaultUser =
  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png";

export default function ProfileHeader(props) {
  const { imageURL, name } = props;

  return (
    <StyledProfileHeader>
      <img src={imageURL || defaultUser} alt="default-user" />
      <div>
        <h3> {name} </h3>
      </div>
    </StyledProfileHeader>
  );
}
