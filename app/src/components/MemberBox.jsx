import React, { Component } from 'react';

const groupMembers = [
  {name: 'Frodo Baggins', phone: 123, isChecked: 'false'}, 
  {name: 'Peregrin  Took', phone: 1234, isChecked: 'false'}, 
  {name: 'Meriadoc Brandybuck', phone: 12345, isChecked: 'false'}, {name: 'Samwise Gamgee', phone: 123456, isChecked: 'false'}
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

  render() {
    return (
      <div>
        <p>Your group members will appear here. Uncheck the box to remove someone from the message chain.</p>
        <div>
          {this.state.members.map((member, index) => 
            <span>
              <input key={index} type="checkbox" />
              <label>{member.name}</label>
            </span>
          )}
          <button>
            add member
          </button>
        </div>
      </div>
    )
  }
}

export default MemberBox