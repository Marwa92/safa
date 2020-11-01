import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2.5em;
  margin-left: 20%;
  margin-right: 20%;
`;

const MessageContainer = styled.div`
  margin-top: 1em;
  background-color: #fff;
  padding-top: 1em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-bottom: 0.7em;
  border-radius: 2px;
  color: red;
`;

const Email = styled.p`
  color: black;
`;

export default function Step3() {

  return (
 <Wrapper>
      <MessageContainer>
        Congratz, you are successfully created your account. We Just sent a confirmation email. Please check your Email. <Email>Resend Email</Email>
      </MessageContainer>
    </Wrapper>
  );
}
