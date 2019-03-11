import React, { Component } from 'react';

const groupMembers = [
  {name: 'Frodo Baggins', phone: 123, isChecked: false}, 
  {name: 'Peregrin  Took', phone: 1234, isChecked: false}, 
  {name: 'Meriadoc Brandybuck', phone: 12345, isChecked: false}, {name: 'Samwise Gamgee', phone: 123456, isChecked: false}
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

  toggle = (phone) => {
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

  render() {
    return (
      <div>
        <p>Your group members will appear here. Uncheck the box to remove someone from the message chain.</p>
        <div>
          {this.state.members.map((member, index) => 
            <span>
              <input 
                key={index} 
                type="checkbox" 
                onClick={() => this.toggle(member.phone)} />
              <label>{member.name}:{JSON.stringify(member.isChecked)}</label>
            </span>
          )}
          <button>
            add member
          </button>
          <button>
            select all
          </button>
          <button>
            select none
          </button>
        </div>
      </div>
    )
  }
}

export default MemberBox