import React, { Component } from 'react';

import styled from 'styled-components';

// STYLED COMPONENTS
const MemerBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
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
  {name: 'Frodo Baggins', phone: 123, isChecked: false}, 
  {name: 'Peregrin  Took', phone: 1234, isChecked: false}, 
  {name: 'Meriadoc Brandybuck', phone: 12345, isChecked: false}, 
  {name: 'Samwise Gamgee', phone: 123456, isChecked: false}
]

class MemberBox extends Component {
  constructor() {
    super();
    this.state = {
      members: []
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

  render() {
    const memberList = this.state.members.map((member, index) => 
      <span key={index}>
        <input 
          type="checkbox" 
          onClick={() => this.toggleCheckbox(member.phone)} />
        <label>
          {member.name}
        </label>
      </span>
    )

    return (
      <MemerBoxContainer>
        <p>Your group members will appear here. Uncheck the box to remove someone from the message chain.</p>
        
        {memberList}

        <div>
          <button
            onClick={() => this.toggleMemberForm()} >
            add member
          </button>
          <button>
            select all
          </button>
          <button>
            select none
          </button>
          <button 
            onClick={() => console.log(this.state.members)} >
            log state
          </button>
        </div>

        <form 
          style={AddMemberForm}
          className="addMemberForm">
          <input type="text"
            placeholder="...Full Name" />
          <input type="text"
            placeholder="...Phone Number" />
          <button>Submit</button>
        </form>
      </MemerBoxContainer>
    )
  }
}

export default MemberBox