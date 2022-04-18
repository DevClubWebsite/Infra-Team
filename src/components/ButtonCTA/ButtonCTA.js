import React from "react";
import PropTypes from "prop-types";
import { ArrowDiv, StyledButtonCTA } from "./ButtonCTA.styled";
import GlobalStyles from "../../Theme/Global";
import Arrow from "../../Images/yellow-arrow-icon.svg";

const ButtonCTA = ({ label, size = "reg" }) => {
  return (
    <>
      <GlobalStyles />
      <StyledButtonCTA size={size}>
        <p>{label}</p>
        <ArrowDiv>
          <img src={Arrow} />
        </ArrowDiv>
      </StyledButtonCTA>
    </>
  );
};

ButtonCTA.PropTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["reg", "mobile"]),
};

export default ButtonCTA;
