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

export default function Step3(props) {
  const { currentStep } = props;
  return (
    currentStep !==3?null:(  <Wrapper>
      You're all set.Ready?
      <MessageContainer>
        We will send message to this email <Email>example@example.com</Email>
      </MessageContainer>
    </Wrapper>)
  );
}
