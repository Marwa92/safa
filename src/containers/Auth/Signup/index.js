import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { Form, Button } from 'react-bootstrap';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from './Success'
import Bar from '../../../components/Bar'
import PrevButton from '../../../components/PrevButton'
import NextButton from '../../../components/NextButton'
import { signUp } from '../../../services/Services'

const FlexWrapper = styled.div`
  background-size: cover;
  text-align: center;
  min-width: 100vw;
  margin-top: 10vh;
`;

const SubmitButton = styled(Button)`
float: right;
width: 12em;
margin-right: 20%;
margin-top: 1.75em;
`

const ButtonGroup = styled.div`
   display: flex;
   justify-content: flex-end;
`
export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      user_email: "",
      user_password: "",
      user_password_confirmation: "",
      lang: "en",
      company_name: "",
      company_address: "",
      company_phone: "",
      company_business_email: "",
      company_country_id: "",
      company_city_id: "",
      user_full_name: "",
      user_phone: ""
    }
  );
const [success, setSuccess] = useState(false)
  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserData({ [id]: value });
    console.log("userData:", userData, id, value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userData, setSuccess);
  };
  
  return (
    <FlexWrapper>
     {success?<Success />: 
     <>
     <Bar currentStep={currentStep} />
      <Form className="mt-4">
       <Step1
          currentStep={currentStep}
          userData={userData}
          setUserData={setUserData}
          handleChange={handleChange}
        />
        <Step2
            currentStep={currentStep}
            userData={userData}
            setUserData={setUserData}
            handleChange={handleChange}
        />
        <Step3
            currentStep={currentStep}
            userData={userData}
            setUserData={setUserData}
            handleChange={handleChange}
        />
        <ButtonGroup className="">
        { currentStep !==1&&
              <PrevButton currentStep={currentStep} setCurrentStep={setCurrentStep} />}
          {   currentStep <3?  <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />: <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>}
        </ButtonGroup>
        </Form>
      </>
      }
    </FlexWrapper>
  );
}

Signup.propTypes = {};
