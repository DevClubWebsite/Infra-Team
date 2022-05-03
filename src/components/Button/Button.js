import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import Theme from "../../Theme/Theme";
export default function Button({ background = Theme.background.dark, color = "none", as = "regular", width = 10, height = 3, padding = 0.2, onclick, children }) {
  return (
    <>
      <StyledButton onClick={() => onclick()} background={background} color={color} as={as} width={width} height={height} padding={padding}>
        {children}
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  as: PropTypes.oneOf(["regular", "outlined", "text"]),
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  onclick: PropTypes.func
};