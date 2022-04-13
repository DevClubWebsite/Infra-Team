import React from 'react';
import { StyledButton } from './Button.styled';

function Button({label}) {
  return (
    <StyledButton>
      {label}
    </StyledButton>
  )
};

export default Button;