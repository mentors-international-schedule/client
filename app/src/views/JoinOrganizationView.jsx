import React from "react";
import styled from "styled-components";
import JoinOrganizationForm from "../components/JoinOrganizationForm";
const StyledJoinOrganizationView = styled.div``;

export default class JoinOrganizationView extends React.Component {
  render() {
    return (
      <StyledJoinOrganizationView>
        <JoinOrganizationForm />
      </StyledJoinOrganizationView>
    );
  }
}
