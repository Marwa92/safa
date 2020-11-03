import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
margin: 0 20%;
padding: 0 2%;
flex-direction:row;
.active{
  color: #ff5f59;
  border:1px solid #ff5f59;
}
.done{
  color: #1877fb;
  border: 1px solid #1877fb;
}
.complete{
  background-color: #1877fb;
}
`

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #FAF9F8;
  border-radius:50%;
  display:inline-block;
  color: grey;
`
const Spacing = styled.hr`
  border-top: 5px solid  #FAF9F8;
  border-bottom: 5px solid  #FAF9F8;
  height: .5em;
  width: 9em;
  display:inline-block;
  vertical-align: middle;
  margin-bottom: 25px;
 
`

export default function Bar(props) {
  const { currentStep, steps } = props;
  return (
  <Wrapper className="">
    {steps.map((step,i)=>{   
    return ( <>
    {i!==0&& <Spacing className={`mt-2 ${(currentStep===i+1 && i>0 )||( currentStep>i+1 && i>0)?'complete': null}`} />}
     <IconWrapper className={`pt-2 ${currentStep==i+1?'active': currentStep>i+1?'done':null} `}>       
      <FontAwesomeIcon
        icon={step.icon}
        size="2x"
       />
     </IconWrapper></>)})}
  </Wrapper>);
}
