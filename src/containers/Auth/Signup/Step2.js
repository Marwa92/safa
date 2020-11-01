import React from "react";
import styled from "styled-components";
import { Form, Col, Row } from "react-bootstrap";
import CountrySelector from "../../../components/CountrySelector";
import PhoneField from "../../../components/PhoneField";
import arrow from "../../../assets/ArrowDown.png";

const Wrapper = styled.div`
  margin-top: 2.5em;
  margin-left: 20%;
  margin-right: 20%;
`;

const FormContainer = styled.div`
  margin-top: 1em;
  background-color: #fff;
  padding-top: 0.7em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-bottom: 0.7em;
  border-radius: 2px;
`;
const FormLabel = styled(Form.Label)`
  color: #212529;
  font-family: "Montserrat";
  font-size: 0.875em;
  line-height: 1.2em;
  display: block;
  text-align: left;
  /* float: left; */
`;
const FormControl = styled(Form.Control)`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  height: 2.2em;
  padding-top: 0.2em;
  padding-left: 0.75em;
  margin-bottom: 0.1em;
  ::placeholder {
    color: #b1b1b1;
    font-family: "Montserrat";
    font-size: 0.938em;
  }
`;
export default function Step2(props) {
  const { userData, setUserData, onChange, currentStep } = props;
  return (
    currentStep !==2?null:(<Wrapper>
      Verify your company.
      <FormContainer>
      <Form.Group controlId="company_name" className="form-label-group">
          <FormLabel className="label">COMPANY NAME</FormLabel>
          <FormControl
            required
            className="input"
            type="text"
            placeholder="Enter your company name"
            value={userData.company_name}
            onChange={(e) => onChange(e, setUserData)}
          />
        </Form.Group>
        <Form.Group controlId="company_address" className="form-label-group">
          <FormLabel className="label">ADDRESS</FormLabel>
          <FormControl
            required
            className="input"
            type="text"
            placeholder="Enter your address"
            value={userData.company_address}
            onChange={(e) => onChange(e, setUserData)}
          />
        </Form.Group>
        <Form.Group
          controlId="company_business_email"
          className="form-label-group"
        >
          <FormLabel className="label">BUSINESS EMAIL</FormLabel>
          <FormControl
            required
            className="input"
            type="email"
            placeholder="Enter your business email"
            value={userData.company_business_email}
            onChange={(e) => onChange(e, setUserData)}
          />
        </Form.Group>
        <Row>
          <Col sm={12} md={6} className="">
            <Form.Group className="form-label-group">
              <FormLabel className="label">COMPANY PHONE NUMBER</FormLabel>
              <PhoneField
                id="company_phone"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                phone={userData.company_phone}
                setUserData={setUserData}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} className="">
            <Form.Group className="form-label-group">
              <FormLabel className="label">COMPANY PHONE NUMBER</FormLabel>
              <PhoneField
                id="company_phone"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                phone={userData.company_phone}
                setUserData={setUserData}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </FormContainer>
    </Wrapper>)
  );
}
