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
  width: 364px;
  font-size: 16px;
  border-radius: 3px;
  padding: 57px 92px;
  box-shadow: rgba(23, 188, 255, 0.3) 0px 0px 30px;
  margin: 0 auto;
  margin-top: 125px;
  background: #FDFDFD;

  h2 {
    font-family: ‘Source Sans Pro’, sans-serif;
    text-align: center;
    font-size: 20px;
    color: #009DDE;
    font-weight: 900;
    margin: 0;
    margin-bottom: 30px;
  }
`;

export function JoinOrganizationForm(props) {
  const [initialized, setInitialized] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (!initialized) {
      props.getOrganizations();
      setInitialized(true);
    }
  });

  return (
    <StyledJoinOrganizationForm>
      <h2>Join or Create an Organization</h2>
      <SearchInputWithDrop
        create={props.createOrganization}
        join={props.joinOrganization}
        items={props.organizations}
      />
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
