import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import GlobalStyles from "../../Theme/Global";
import Theme from "../../Theme/Theme";

export default function Button({ background = Theme.background.dark, color = "none", variant = "regular", width, height, padding = 0.2 }) {
  return (
    <>
      <GlobalStyles />
      <StyledButton background={background} color={color} variant={variant} width={width} height={height} padding={padding} />
    </>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["regular", "outlined", "text"]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  padding: PropTypes.number
};