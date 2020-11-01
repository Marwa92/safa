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
export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      user_email: "teswx1stwqw11qa2qas1sss1asssaqsssw1_22@gmail.com",
      user_password: "123456Aa",
      user_password_confirmation: "123456Aa",
      lang: "en",
      company_name: "test",
      company_address: "test",
      company_phone: "3487945646",
      company_business_email: "test@test.com",
      company_avatar: "/home/abdo/Pictures/Screenshot from 2020-08-16 14-22-54.png",
      company_country_id: "45",
      company_city_id: "468",
      company_extra_data:[ "4534534534534e5"],
      user_full_name: "jkhjgfyds",
      user_phone: "jkhgfm",
      user_position: "jkhufm",
      user_nationality: "jhgtf,",
      user_status: "hjgfd",
      user_is_admin: "hhmd",
      user_extra_data: ["4534534534534e5"],
    }
  );
const [success, setSuccess] = useState(false)
  const handleChange = (event, inputSetter) => {
    const { id, value } = event.target;
    inputSetter({ [id]: value });
    console.log("e:", userData, id, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userData, success, setSuccess);
  };
  return (
    <FlexWrapper>
     {success?<Success />: <><Bar currentStep={currentStep} />
      <Form className="mt-4">
       <Step1
          currentStep={currentStep}
          userData={userData}
          setUserData={setUserData}
          onChange={handleChange}
        />
        <Step2
            currentStep={currentStep}
            userData={userData}
            setUserData={setUserData}
            onChange={handleChange}
        />
        <Step3
            currentStep={currentStep}
            userData={userData}
            setUserData={setUserData}
            onChange={handleChange}
        />
    { currentStep !==1&&   <PrevButton currentStep={currentStep} setCurrentStep={setCurrentStep} />}
   {   currentStep <3?  <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />: <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>}
</Form></>}
    </FlexWrapper>
  );
}

Signup.propTypes = {};
