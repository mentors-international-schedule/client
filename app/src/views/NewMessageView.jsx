import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import MemberBox from "../components/MemberBox";
import ComposeMessageField from "../components/Group/ComposeMessageField";
import ComposeMessageDisplay from "../components/Group/ComposeMessageDisplay";
const StyledNewMessageView = styled.div`
  display: flex;
  height: 600px;
  justify-content: space-between;
  .message-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export function NewMessageView(props) {
  const { messageInput } = props;
  return (
    <StyledNewMessageView>
      <div className="message-body">
        {!!messageInput ? (
          <ComposeMessageDisplay message={messageInput} />
        ) : (
          <div>message History</div>
        )}
        <ComposeMessageField />
      </div>
      <MemberBox />
    </StyledNewMessageView>
  );
}
function mapStateToProps(state) {
  if (!!state.form.composeMessage && state.form.composeMessage.values) {
    return {
      messageInput: state.form.composeMessage.values.message
    };
  }
  return {
    messageInput: false
  };
}

export default connect(
  mapStateToProps,
  {}
)(NewMessageView);
