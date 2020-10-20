import React, { useReducer } from "react";
import StepZilla from "react-stepzilla";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import PersonalInfo from "./PersonalInfo";
import CompanyInfo from "./CompanyInfo";
import Message from "./Message";
import "./main.css";
// import axios from "../../../utils/API";

const FlexWrapper = styled.div`
  background-size: cover;
  text-align: center;
  min-width: 100vw;
  margin-top: 10vh;
`;
const StyledStepZilla = styled(StepZilla)`
  min-width: 50vw;
  margin-left: 25vw;
  margin-right: 25vw;
  text-align: center;
`;

export default function Signup() {
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

  const steps = [
    {
      name: (
        <FontAwesomeIcon
          icon={faUserCircle}
          size="2x"
          style={{
            marginBottom: "-28px",
            position: "relative",
            zIndex: "1",
          }}
        />
      ),
      component: (
        <PersonalInfo
          userData={userData}
          setUserData={setUserData}
          onChange={handleChange}
        />
      ),
    },

    {
      name: (
        <FontAwesomeIcon
          icon={faBuilding}
          size="2x"
          style={{
            marginBottom: "-28px",
            position: "relative",
            zIndex: "1",
          }}
        />
      ),
      component: (
        <CompanyInfo
          userData={userData}
          setUserData={setUserData}
          onChange={handleChange}
        />
      ),
    },

    {
      name: (
        <FontAwesomeIcon
          icon={faShieldAlt}
          size="2x"
          style={{
            marginBottom: "-28px",
            position: "relative",
            zIndex: "1",
          }}
        />
      ),
      component: (
        <Message
          userData={userData}
          setUserData={setUserData}
          onChange={handleChange}
        />
      ),
    },
  ];

  return (
    <FlexWrapper>
      <StyledStepZilla
        showSteps
        steps={steps}
        preventEnterSubmission={false}
        hocValidationAppliedTo={[-1]}
        startAtStep={
          window.sessionStorage.getItem("step")
            ? parseFloat(window.sessionStorage.getItem("step"))
            : 0
        }
        onStepChange={(step) => window.sessionStorage.setItem("step", step)}
        prevBtnOnLastStep
        nextButtonCls="next"
        backButtonCls="back"
        backButtonText="back"
        stepsNavigation
        // preventEnterSubmission={true}
        // nextTextOnFinalActionStep={"Confirm"}
      />
    </FlexWrapper>
  );
}

Signup.propTypes = {};
