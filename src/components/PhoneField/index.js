import React, { Fragment } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input/max";
import styled from "styled-components";
import propTypes from "prop-types";
import { Form } from 'react-bootstrap';

const Phone = styled(PhoneInput)`
  .PhoneInputInput {
    width: 100%;
    height: 3em;
    border-radius: 3px;
    border: solid 1px #081c64;
    background-color: #ffffff;
    padding-left: 0.75em;
    padding-top: 1em;
    ::placeholder {
      font-size: 0.875em;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #7680a6;
    }
    :focus {
      outline: none !important;
      outline-offset: none !important;
    }
  }
  .PhoneInputCountryIcon {
    height: 3em;
    width: 2.2em;
    border-radius: 3px;
    border: solid 1px #081c64;
  }
  --PhoneInputCountrySelectArrow-color: #0d9909;
  .PhoneInputCountryIconImg {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
const FormLabel = styled(Form.Label)`
  color: #212529;
  font-family: "Montserrat";
  font-size: 0.875em;
  line-height: 1.2em;
  display: block;
  text-align: left;
  position: absolute;
  margin-top: 0.65em;
  margin-left: 4.5em;
  text-transform: uppercase;
`;
export default function PhoneField(props) {
  const { phone, onChange, label } = props;
  return (
    <Fragment>
      <FormLabel className="label">{label}</FormLabel>
      <Phone
        defaultCountry="SA"
        placeholder="Enter phone number"
        value={phone}
        onChange={onChange}
        error={
          phone
            ? isValidPhoneNumber(phone)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
    </Fragment>
  );
}

PhoneField.propTypes = {
  phone: propTypes.string,
  setUserData: propTypes.func,
  onChange: propTypes.func,
  label: propTypes.string,
};
