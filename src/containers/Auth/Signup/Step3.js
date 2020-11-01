import React from "react";
import styled from "styled-components";
import send from '../../../assets/send.png';

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
  color: #ff5f59;
`;
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    img {
        max-width: 200px;
    }`
const Email = styled.p`
  color: black;
`;

export default function Step3(props) {
  const { currentStep, userData } = props;
  return (
    currentStep !==3?null:(  <Wrapper>
      You're all set.Ready?
      <MessageContainer>
      <ImageWrapper >
            <img alt="email img" src={send} />
          </ImageWrapper>
        We will send message to this email <Email>{userData.user_email}</Email>
      </MessageContainer>
    </Wrapper>)
  );
}
