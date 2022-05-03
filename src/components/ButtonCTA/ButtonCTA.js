import React from "react";
import PropTypes from "prop-types";
import { ArrowDiv, StyledButtonCTA } from "./ButtonCTA.styled";
import Arrow from "../../Images/yellow-arrow-icon.svg";
import Typography from "../Typography/Typography";

function ButtonCTA({ children, size = "regular" }) {
  return (
    <>
      <StyledButtonCTA size={size}>
        <Typography as="p" color="black">
          {children}
        </Typography>
        <ArrowDiv size={size}>
          <img src={Arrow} alt="arrow" />
        </ArrowDiv>
      </StyledButtonCTA>
    </>
  );
}
ButtonCTA.propTypes = {
  size: PropTypes.oneOf(["regular", "mobile"])
};

export default ButtonCTA;
