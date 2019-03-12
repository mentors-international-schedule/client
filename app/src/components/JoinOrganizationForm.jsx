import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getOrganizations,
  joinOrganization,
  createOrganization
} from "../actions/organizationActions";
import styled from "styled-components";
import SearchInputWithDrop from "../components/SearchInputWithDrop";
const StyledJoinOrganizationForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 500px;
    height: 500px;
    border: 1px solid black;
    h2 {
      text-align: center;
    }
  }
`;

export function JoinOrganizationForm(props) {
  const [initialized, setInitialized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (!initialized) {
      props.getOrganizations();
      setInitialized(true);
    }
  });

  return (
    <StyledJoinOrganizationForm>
      <div className="container">
        <h2>What is the Name of your Organization?</h2>
        <SearchInputWithDrop
          create={props.createOrganization}
          join={props.joinOrganization}
          items={props.organizations}
        />
      </div>
    </StyledJoinOrganizationForm>
  );
}
const mapStateToProps = state => ({
  organizations: state.organizationsReducer.organizations,
  loadingList: state.organizationsReducer.gettingOrgs
});

export default connect(
  mapStateToProps,
  { getOrganizations, joinOrganization, createOrganization }
)(JoinOrganizationForm);
