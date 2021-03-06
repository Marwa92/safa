import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import arrow from "../../assets/keyboard_arrow_down.svg";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  padding-left: 0;
`;
const Select = styled(Form.Control)`
  height: 3.5em;
  width: ${(props) => props.width};
  appearance: none;
  background-repeat: no-repeat, repeat;
  background-position: right 1.1em top 50%, 0 0;
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid #dbdbdb;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: ${(props) => props.boxSizing};
  box-shadow: ${(props) => props.boxShadow};
  background-image: ${(props) => props.backgroundImage};
  padding-left: 0.75em;
  padding-top:1em;
  color: #acacac;
  :focus {
    outline: none !important;
    outline-offset: none !important;
  }
`;
const Option = styled.option`
  font-family: ${(props) => props.fontFamily};
  font-size: 0.875em;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color};
  width: auto;

`;

export default function Selector(props) {
  const {
    setUserData,
    id,
    height,
    width,
    border,
    backgroundColor,
    borderRadius,
    boxSizing,
    boxShadow,
    backgroundImage,
    backgroundSize,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    array
  } = props;
  return (
    <Container>
      <Select
        as="select"
        id={id}
        onChange={(e) => {setUserData({[id]: e.target.value })}}
        fontFamily={fontFamily}
        boxSizing={boxSizing}
        height={height}
        width={width}
        border={border}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        backgroundSize={backgroundSize}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        <Option value="" disabled selected>Choose your country</Option>
        {array.map((item, index) => (
          <Option
            key={index}
            value={item.code}
            fontFamily={fontFamily}
            color={color}
          >
            {item.name}
          </Option>
        ))}
      </Select>
    </Container>
  );
}
Selector.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  boxSizing: PropTypes.string,
  boxShadow: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  array: PropTypes.array,
  onChange: PropTypes.func,
  setUserData: PropTypes.func,
  id: PropTypes.string,
};

Selector.defaultProps = {
  height: "3em",
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "3px",
  boxSizing: "border-box",
  boxShadow: "none",
  backgroundImage: `url(${arrow})`,
  backgroundSize: "1.712em auto, 100%",
  fontSize: "0.875em",
  color: "#081c64",
  fontWeight: 600,
};
