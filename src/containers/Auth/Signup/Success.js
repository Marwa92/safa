import React from "react";
import styled from "styled-components";
import send from '../../../assets/send.png'

const Wrapper = styled.div`
  margin-top: 14em;
  margin: 0 25%;
`;

const MessageContainer = styled.div`
  margin-top: 1em;
  background-color: #fff;
  padding-top: 1em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-bottom: 0.7em;
  border-radius: 9px;
  color: black;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    img {
        max-width: 200px;
    }`
    
const Text = styled.p`
text-align: center;
width: 50%;
margin-left: 25%;
font-size: 1em;
`
const Email = styled.p`
  color: #ff5f59;
`;

export default function Step3() {

  return (
 <Wrapper className="mt-5">
  
      <MessageContainer className="pt-1">
      <ImageWrapper >
            <img alt="email img" src={send} />
          </ImageWrapper>
       <Text> Congratz, you are successfully created your account. We Just sent a confirmation email. Please check your Email.</Text> <Text>Didn't receive it?<Email>Resend Email</Email></Text>
      </MessageContainer>
    </Wrapper>
  );
}
