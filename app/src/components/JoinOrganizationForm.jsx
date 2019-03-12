import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getOrganizations } from "../actions/organizationActions";
import styled from "styled-components";
import URL from "../actions/AJAX_URL";
const StyledJoinOrganizationForm = styled.div``;

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
      <select name="organization">
        {props.organizations.map(organization => (
          <option value={organization.name}>{organization.name}</option>
        ))}
      </select>
    </StyledJoinOrganizationForm>
  );
}
const mapStateToProps = state => ({
  organizations: state.organizationsReducer.organizations,
  loadingList: state.organizationsReducer.gettingOrgs
});

export default connect(
  mapStateToProps,
  { getOrganizations }
)(JoinOrganizationForm);
