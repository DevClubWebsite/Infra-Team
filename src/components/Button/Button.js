import React, { Children } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import GlobalStyles from "../../Theme/Global";
import Theme from "../../Theme/Theme";
import Typography from "../Typography/Typography";
export default function Button({ background = Theme.background.dark, color = "none", variant = "regular", width, height, padding = 0.2, onclick }) {
  return (
    <>
      <GlobalStyles />
      <StyledButton onClick={() => onclick()} background={background} color={color} variant={variant} width={width} height={height} padding={padding}>
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["regular", "outlined", "text"]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  padding: PropTypes.number,
  onclick: PropTypes.func,
  component: PropTypes.any
};