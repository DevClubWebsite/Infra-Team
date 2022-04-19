import React from "react";
import PropTypes from "prop-types";
import { ArrowDiv, StyledButtonCTA } from "./ButtonCTA.styled";
import GlobalStyles from "../../Theme/Global";
import Arrow from "../../Images/yellow-arrow-icon.svg";

function ButtonCTA({ label, size = "regular" }) {
  return (
    <>
      <GlobalStyles />
      <StyledButtonCTA size={size}>
        <p>{label}</p>
        <ArrowDiv size={size}>
          <img src={Arrow} alt="arrow" />
        </ArrowDiv>
      </StyledButtonCTA>
    </>
  );
}
ButtonCTA.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["regular", "mobile"]),
};

export default ButtonCTA;
