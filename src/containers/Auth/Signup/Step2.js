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

const Note= styled.p` 
font-size: 1em;
text-align: center;`

export default function Step2(props) {
  const { userData, setUserData, handleChange, currentStep } = props;
  let countries = ["Egypt", "UK", "Canda"];
  let cities = ["Cairo", "Giza", "Alex"];

  return (
    currentStep !==2?null:(<Wrapper>
      Verify your company.
      <FormContainer>
      <Note>
          Entering this information correctly will facilitate the company
          verification process
        </Note>
      <Form.Group controlId="company_name" className="form-label-group">
          <FormLabel className="label">COMPANY NAME</FormLabel>
          <FormControl
            required
            className="input"
            type="text"
            placeholder="Enter your company name"
            value={userData.company_name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Col sm={12} md={6} className="">
            <Form.Group className="form-label-group">
              <FormLabel className="label">COUNTRY</FormLabel>
              <CountrySelector
                id="company_country_id"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                setUserData={setUserData}
                onChange={handleChange}
                array={countries}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} className="">
          <Form.Group className="form-label-group">
              <FormLabel className="label">CITY</FormLabel>
              <CountrySelector
                id="company_city_id"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                array={cities}
                fontWeight="300"
                setUserData={setUserData}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
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
                onChange={(e)=>setUserData({company_phone: e})}
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
                phone={userData.user_phone}
                onChange={(e)=>setUserData({user_phone: e})}
              />
            </Form.Group>
          </Col>
        </Row>
      </FormContainer>
    </Wrapper>)
  );
}
