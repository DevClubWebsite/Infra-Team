import React from 'react';
import { StyledButton } from './Button.styled';

function Button({label, backgroundColor}) {
  return (
    <StyledButton bg={backgroundColor}>
      {label}
    </StyledButton>
  )
};

export default Button;