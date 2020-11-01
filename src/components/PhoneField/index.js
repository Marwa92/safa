import React, { Fragment } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input/max";
import styled from "styled-components";
import propTypes from "prop-types";

const Phone = styled(PhoneInput)`
  .PhoneInputInput {
    width: 100%;
    height: 2.2em;
    border-radius: 3px;
    border: solid 1px #081c64;
    background-color: #ffffff;
    padding-left: 0.75em;
    ::placeholder {
      font-family: SFProText;
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
    height: 2.2em;
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
export default function PhoneField(props) {
  const { phone, setUserData } = props;
  return (
    <Fragment>
      <Phone
        defaultCountry="SA"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setUserData(e)}
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
};
