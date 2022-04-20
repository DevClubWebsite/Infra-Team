import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import GlobalStyles from "../../Theme/Global";
import Theme from "../../Theme/Theme";

function Button({
  background = Theme.background.dark,
  color = Theme.typography.white,
  label,
  variant = "regular",
  size = "medium",
}) {
  return (
    <>
      <GlobalStyles />
      <StyledButton
        size={size}
        variant={variant}
        background={background}
        color={color}
      >
        {label}
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["regular", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large", "extraLarge"]),
};
export default Button;
