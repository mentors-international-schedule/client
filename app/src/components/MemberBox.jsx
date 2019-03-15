import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getContacts,
  createContact,
  deleteContact,
  replaceContacts
} from "../actions/memberBoxActions";

import styled from "styled-components";
import Spinner from "./Spinner";
import { lighten } from "polished";

// STYLED COMPONENTS
const MemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: ${lighten(0.4, "#17bcff")};
  padding: 0 15px;
  font-family: ’Source Sans Pro’, sans-serif;
  margin-left: 20px;

  h3 {
    color: #17bcff;
    margin-top: 40px;
    margin-bottom: 0;
  }
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  float: left;
  width: 250px;
  overflow-y: auto;
  height: 180px;
  margin: 10px 0;
`;

const GroupMember = styled.span`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  div {
    input {
      margin-right: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100px;
  margin-bottom: 20px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #17bcff;
  background: none;
  font-size: 11px;
  color: #17bcff;
  font-family: ’Source Sans Pro’, sans-serif;
  font-weight: bold;
  transition: 0.15s;

  &:hover {
    background: #fff;
  }
`;

const NewMemberButton = styled.button`
  width: 90px;
  height: 26px;
  border-radius: 10px;
  border: none;
  background: #17bcff;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px 8px;
`;

// INLINE COMPONENTS (ONLY FOR TOGGLING)
const addMemberForm = toggleFlag => {
  return {
    flexDirection: "column",
    marginTop: "0",
    minHeight: "200px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    justifyContent: "space-evenly",
    padding: "0 20px",
    background: "#FDFDFD",
    display: toggleFlag ? "flex" : "none"
  };
};

const formError = toggleFlag => {
  return {
    color: "red",
    fontSize: "0.9rem",
    display: toggleFlag ? "block" : "none"
  };
};

// TEMPORARY CONSTANTS (REPLACED BY AJAX REQUEST)
// const groupMembers = [
//   {name: 'Frodo Baggins', phone: 123444, isChecked: false},
//   {name: 'Peregrin  Took', phone: 1234, isChecked: false},
//   {name: 'Meriadoc Brandybuck', phone: 12345, isChecked: false},
//   {name: 'Famwise Gamgee', phone: 123456, isChecked: false},
//   {name: 'Wrodo Baggins', phone: 1258883, isChecked: false},
//   {name: 'Reregrin  Took', phone: 825485, isChecked: false},
//   {name: 'Seriadoc Brandybuck', phone: 66672, isChecked: false},
//   {name: 'Ramwise Gamgee', phone: 235235, isChecked: false}
// ]

class MemberBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      name: "",
      phone: "",
      memberFormToggle: false,
      blankFormError: false,
      duplicateMemberError: false,
      groupId: 17
    };
  }

  // MISSING isChecked on Redux store
  // only gets if it is changing to its view
  componentDidMount() {
    if (
      (this.props.contacts[0] &&
        this.props.contacts[0].group_id !== this.props.groupId * 1) ||
      !this.props.contacts[0]
    ) {
      this.props.getContacts(this.props.groupId);
    }
  }

  toggleCheckbox = id => {
    const updatedContacts = this.props.contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, isChecked: contact.isChecked ? false : true };
      }
      return contact;
    });
    this.props.replaceContacts(updatedContacts);
  };

  toggleMemberForm = () => {
    // USING DOM MANIPULATION (Don't do this)
    // let memberForm = document.querySelector('.addMemberForm');

    // if (memberForm.style.display === "none") {
    //   memberForm.style.display = "flex";
    // } else {
    //   memberForm.style.display = "none";
    // }

    // USING REACT STATE
    this.setState(prevState => ({
      memberFormToggle: !prevState.memberFormToggle
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name === "" || this.state.phone === "") {
      // USING DOM MANIPULATION (Don't do this)
      // document.querySelector('.formError').style.display = 'block';

      this.setState({
        blankFormError: true,
        duplicateMemberError: false
      });
    } else if (
      this.props.contacts.filter(
        member => member.phone === parseInt(this.state.phone)
      ).length > 0
    ) {
      this.setState({
        duplicateMemberError: true,
        blankFormError: false
      });
    } else {
      // USING DOM MANIPULATION (Don't do this)
      // document.querySelector('.formError').style.display = 'none';

      this.setState({
        blankFormError: false,
        duplicateMemberError: false
      });

      // let newMember = {
      //   name: this.state.name,
      //   phone: parseInt(this.state.phone),
      //   isChecked: false
      // };

      // let updatedMembers = [...this.state.members];

      // updatedMembers.push(newMember);

      this.props.createContact(
        this.state.name,
        this.state.phone,
        this.props.groupId
      );

      this.setState({
        name: "",
        phone: ""
      });
    }
  };

  selectToggle = bool => {
    const updatedContacts = this.props.contacts.map(member => ({
      ...member,
      isChecked: bool
    }));
    this.props.replaceContacts(updatedContacts);
  };

  render() {
    const members = this.props.contacts.map(member => (
      <GroupMember key={member.id} >
        <div>
          <input
            type="checkbox"
            name="checkbox"
            checked={member.isChecked}
            onClick={() => this.toggleCheckbox(member.id)}
          />
          <label>{member.name}</label>
        </div>
        <div
          onClick={() => this.props.deleteContact(member.id, member.group_id)}
        >
          <i class="fa fa-trash" aria-hidden="true" style={{color: '#17bcff',}}></i>
        </div>
      </GroupMember>
    ));

    return (
      <MemberBoxContainer>
        <h3><i class="fa fa-users" aria-hidden="true"></i> GROUP MEMBERS</h3>
        <p>Uncheck the box to remove someone from the message chain.</p>
        <MemberList>
          {this.props.gettingContacts ? (
            <Spinner margin=" auto auto" size="8px" />
          ) : (
            members
          )}
        </MemberList>

        <ButtonContainer>
          <Button onClick={this.toggleMemberForm}>ADD</Button>
          <Button onClick={() => this.selectToggle(true)}>SELECT ALL</Button>
          <Button onClick={() => this.selectToggle(false)}>SELECT NONE</Button>
        </ButtonContainer>

        <form
          style={addMemberForm(this.state.memberFormToggle)}
          className="addMemberForm"
          onSubmit={this.handleSubmit}
        >
          <label>Add New Member: </label>
          <Input
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Full Name"
          />
          <Input
            type="tel"
            id="phone"
            name="phone"
            pattern="[+][0-9]{1}[\ \-\.]?[0-9]{3}[\ \-\.]?[0-9]{3}[\ \-\.]?[0-9]{4}"
            required
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />
          <span>Format: +1 123 456 7890</span>
          {this.props.creatingContact ? (
            <Spinner size="4px" margin=" 0 auto" marginTop="10px" />
          ) : (
            <NewMemberButton>Submit</NewMemberButton>
          )}

          <label
            className="formError"
            style={formError(this.state.blankFormError)}
          >
            Error: please do not leave any fields blank.
          </label>
          <label style={formError(this.state.duplicateMemberError)}>
            Error: phone number already exists.
          </label>
        </form>
      </MemberBoxContainer>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.memberBoxReducer.contacts,
  gettingContacts: state.memberBoxReducer.gettingContacts,
  creatingContact: state.memberBoxReducer.creatingContact,
  error: state.memberBoxReducer.error,
  groupId: state.groupReducer.viewingId
});

export default connect(
  mapStateToProps,
  { getContacts, createContact, deleteContact, replaceContacts }
)(MemberBox);
