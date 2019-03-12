import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import MemberBox from "../components/MemberBox";
import ComposeMessageField from "../components/Group/ComposeMessageField";

const StyledNewMessageView = styled.div`
  display: flex;
`;
export default function NewMessageView(props) {
  return (
    <StyledNewMessageView>
      <div>
        <div>message History</div>
        <div>currently composing message</div>

        <ComposeMessageField />
      </div>
      <MemberBox />
    </StyledNewMessageView>
  );
}
function mapStateToProps(state) {
  if (!!state.form.composeMessage.values) {
    return {
      messageInput: state.form.composeMessage.values.message
    };
  }
}

// export default connect(
//   mapStateToProps,
//   {}
// )(NewMessageView);
