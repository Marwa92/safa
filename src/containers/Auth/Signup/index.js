import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Bar from '../../../components/Bar'
import PrevButton from '../../../components/PrevButton'
import NextButton from '../../../components/NextButton'

// import axios from "../../../utils/API";

const FlexWrapper = styled.div`
  background-size: cover;
  text-align: center;
  min-width: 100vw;
  margin-top: 10vh;
`;

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      user_email: "",
      user_password: "",
      user_password_confirmation: "",
      lang: "",
      company_name: "",
      company_address: "",
      company_phone: "",
      company_business_email: "",
      company_avatar: "",
      company_country_id: "",
      company_city_id: "",
      company_extra_data: "",
      user_full_name: "",
      user_phone: "",
      user_position: "",
      user_nationality: "",
      user_status: "",
      user_is_admin: "",
      user_extra_data: "",
    }
  );

  const handleChange = (event, inputSetter) => {
    const { id, value } = event.target;
    inputSetter({ [id]: value });
    console.log("e:", userData, id, value);
  };


  return (
    <FlexWrapper>
      <Bar currentStep={currentStep} />
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
   {   currentStep <3&&  <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />}
</Form>
    </FlexWrapper>
  );
}

Signup.propTypes = {};
