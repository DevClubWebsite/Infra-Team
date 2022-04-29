import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 0.2rem;
  min-width: ${({ width }) => width}rem;
  min-height: ${({ height }) => height}rem;
  border-radius: 0.277rem;
  border: none;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 1.5px solid ${({ color }) => color};
    `
  }
`;