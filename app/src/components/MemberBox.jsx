import React, { Component } from 'react';

import styled from 'styled-components';

// STYLED COMPONENTS
const MemerBoxContainer = styled.div`
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
  margin-bottom: 20px;
`;

// INLINE COMPONENTS
const AddMemberForm = {
  flexDirection: "column",
  border: "1px solid lightgray",
  marginTop: "20px",
  width: "150px",
  display: "none",
}

const groupMembers = [
  {name: 'Frodo Baggins', phone: 123444, isChecked: false}, 
  {name: 'Peregrin  Took', phone: 1234, isChecked: false}, 
  {name: 'Meriadoc Brandybuck', phone: 12345, isChecked: false}, 
  {name: 'Famwise Gamgee', phone: 123456, isChecked: false},
  {name: 'Wrodo Baggins', phone: 1258883, isChecked: false}, 
  {name: 'Reregrin  Took', phone: 825485, isChecked: false}, 
  {name: 'Seriadoc Brandybuck', phone: 66672, isChecked: false}, 
  {name: 'Ramwise Gamgee', phone: 235235, isChecked: false}
]

class MemberBox extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      name: '',
      phone: '',
    }
  }

  componentDidMount() {
    this.setState({
      members: groupMembers,
    })
  }

  toggleCheckbox = (phone) => {
    let updatedMembers = [...this.state.members];

    updatedMembers.map(member => {
      (member.phone === phone &&
        (member.isChecked = !member.isChecked) 
      )
    })

    this.setState({
      members : updatedMembers,
    })
  }

  toggleMemberForm = () => {
    let memberForm = document.querySelector('.addMemberForm');
    if (memberForm.style.display === "none") {
      memberForm.style.display = "flex";
    } else {
      memberForm.style.display = "none";
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newMember = {
      name: this.state.name, 
      phone: parseInt(this.state.phone), 
      isChecked: false
    };

    let updatedMembers = [...this.state.members];

    updatedMembers.push(newMember);

    this.setState({
      members: updatedMembers,
      name: '',
      phone: '',
    })
  }

  selectAll = () => {
    let updatedMembers = [...this.state.members]
    updatedMembers.map(member => member.isChecked = true)

    let checkboxes = document.getElementsByName('checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
    }
  }

  selectNone = () => {
    let updatedMembers = [...this.state.members]
    updatedMembers.map(member => member.isChecked = false)

    let checkboxes = document.getElementsByName('checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = false;
    }
  }

  render() {
    const members = this.state.members.map((member, index) => 
      <span key={index} style={{marginBottom: '10px',}}>
        <input 
          type="checkbox"
          name="checkbox" 
          onClick={() => this.toggleCheckbox(member.phone)} />
        <label>
          {member.name}
        </label>
      </span>
    )

    return (
      <MemerBoxContainer>
        <p>Your group members will appear here. Uncheck the box to remove someone from the message chain.</p>
        
        <MemberList>
          {members}
        </MemberList>

        <div>
          <button
            onClick={() => this.toggleMemberForm()} >
            add member
          </button>
          <button 
            onClick={() => this.selectAll()} >
            select all
          </button>
          <button
            onClick={() => this.selectNone()} >
            select none
          </button>
          <button 
            onClick={() => console.log(this.state.members)} >
            log state
          </button>
        </div>

        <form 
          style={AddMemberForm}
          className="addMemberForm"
          onSubmit={this.handleSubmit} >
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="...full name" />
          <input type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="...phone number" />
          <button>Submit</button>
        </form>
      </MemerBoxContainer>
    )
  }
}

export default MemberBox