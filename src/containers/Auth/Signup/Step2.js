import React from "react";
import styled from "styled-components";
import { Form, Col, Row } from "react-bootstrap";
import Selector from "../../../components/Selector";
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
  padding-top: 0.8em;
  padding-left: 0.9em;
  padding-right: 0.9em;
  padding-bottom: 0.8em;
  border-radius: 7px;
`;
const FormGroup= styled(Form.Group)`
position: relative;
display: flex;
`
const FormLabel = styled(Form.Label)`
  color: #212529;
  font-family: "Montserrat";
  font-size: 0.875em;
  line-height: 1.2em;
  display: block;
  text-align: left;
  position: absolute;
  margin-top: 0.65em;
  margin-left: 0.75em;
  text-transform: uppercase;
`;
const FormControl = styled(Form.Control)`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  height: 3.5em;
  padding-top: 1.2em;
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
  let countries = [{name:"Egypt", code: '0'}, {name:"UK", code:'1'}, {name:"Canda", code:'3'}];
  let cities =[{name:"cairo", code: '7'}, {name:"Giza", code:'8'}, {name:"Alex", code:'9'}];

  return (
    currentStep !==2?null:(<Wrapper>
      Verify your company.
      <FormContainer>
      <Note>
          Entering this information correctly will facilitate the company
          verification process
        </Note>
      <FormGroup controlId="company_name" className="form-label-group border rounded">
          <FormLabel className="label">COMPANY NAME</FormLabel>
          <FormControl
            required
            className="input border-0"
            type="text"
            placeholder="Enter your company name"
            value={userData.company_name}
            onChange={handleChange}
          />
            <select as="select" onChange={handleChange} value={userData.lang} id="lang" className="px-2">
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
        </FormGroup>
        <FormGroup controlId="company_address" className="form-label-group">
          <FormLabel className="label">ADDRESS</FormLabel>
          <FormControl
            required
            className="input"
            type="text"
            placeholder="Enter your address"
            value={userData.company_address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup
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
        </FormGroup>
        <Row>
          <Col sm={12} md={6} className="">
            <FormGroup className="form-label-group">
              <FormLabel className="label">COUNTRY</FormLabel>
              <Selector
                id="company_country_id"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                setUserData={setUserData}
                onChange={handleChange}
                array={countries}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={6} className="">
          <FormGroup className="form-label-group">
              <FormLabel className="label">CITY</FormLabel>
              <Selector
                id="company_city_id"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                array={cities}
                fontWeight="300"
                setUserData={setUserData}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="">
            <Form.Group className="form-label-group">
              <PhoneField
                id="company_phone"
                label="COMPANY PHONE NUMBER"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                phone={userData.company_phone}
                onChange={(e)=>setUserData({company_phone: e.split('+')[1]})}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} className="">
            <Form.Group className="form-label-group">
              <PhoneField
                id="company_phone"
                label="COMPANY PHONE NUMBER"
                fontFamily="Montserrat"
                backgroundImage={`url(${arrow})`}
                backgroundSize="1em 1em"
                fontWeight="300"
                phone={userData.user_phone}
                onChange={(e)=>setUserData({user_phone: e.split('+')[1]})}
              />
            </Form.Group>
          </Col>
        </Row>
      </FormContainer>
    </Wrapper>)
  );
}
