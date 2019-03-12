import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import MemberBox from "../components/MemberBox";
import ComposeMessageField from "../components/Group/ComposeMessageField";

const StyledNewMessageView = styled.div`
  display: flex;
`;
export function NewMessageView(props) {
  const { messageInput } = props;
  console.log(messageInput);
  return (
    <StyledNewMessageView>
      <div>
        {messageInput ? (
          <div>currently composing message</div>
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
