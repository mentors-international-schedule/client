import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getContacts,
  createContact,
  deleteContact,
  replaceContacts
} from "../actions/memberBoxActions";

import styled from "styled-components";

// STYLED COMPONENTS
const MemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 250px;
  overflow-y: auto;
  height: 200px;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: blue;
  text-decoration: underline;

  &:hover {
    color: darkblue;
  }
`;

const Input = styled.input`
  padding: 5px 8px;
`;

// INLINE COMPONENTS (ONLY FOR TOGGLING)
const addMemberForm = toggleFlag => {
  return {
    flexDirection: "column",
    marginTop: "20px",
    minHeight: "200px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    justifyContent: "space-evenly",
    padding: "0 20px",
    background: "whitesmoke",
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
      <span key={member.id} style={{ marginBottom: "10px" }}>
        <input
          type="checkbox"
          name="checkbox"
          checked={member.isChecked}
          onClick={() => this.toggleCheckbox(member.id)}
        />
        <label>{member.name}</label>
        <button onClick={() => this.props.deleteContact(member.id)}>x</button>
      </span>
    ));

    return (
      <MemberBoxContainer>
        <p>
          Your group members will appear here. Uncheck the box to remove someone
          from the message chain.
        </p>

        <MemberList>{members}</MemberList>

        <ButtonContainer>
          <Button onClick={this.toggleMemberForm}>add member</Button>
          <Button onClick={() => this.selectToggle(true)}>select all</Button>
          <Button onClick={() => this.selectToggle(false)}>select none</Button>
        </ButtonContainer>

        <form
          style={addMemberForm(this.state.memberFormToggle)}
          className="addMemberForm"
          onSubmit={this.handleSubmit}
        >
          <label>Add New Member: </label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Full Name"
          />
          <Input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />
          <button>Submit</button>
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
