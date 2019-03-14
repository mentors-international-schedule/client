import React from "react";
import styled from "styled-components";

const StyledProfileHeader = styled.div`
  width: 310px;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid black;
  }
  h3 {
    font-size: 20px;
    color: #6C7375;
    width: 100%;
    font-weight: bold;  
    margin-bottom: 15px;
  }
  h4 {
    margin-left: 10px;
  }
`;

const OrganizationTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 69px;
  background: #74D7FF;
  color: white;
  border-radius: 5px 5px 0 0;
  padding-left: 15px;
`;

const defaultOrganization =
  "data:image/jpeg;base64,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";
export default function ProfileHeader(props) {
  const { imageURL, name } = props;
  return (
    <StyledProfileHeader>
      <h3>Organization</h3>
      <OrganizationTitle>
        <img src={imageURL || defaultOrganization} alt="Organization" />
        <h4> {name} </h4>
      </OrganizationTitle>
    </StyledProfileHeader>
  );
}
