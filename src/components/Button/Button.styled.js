import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 6.777em;
  height: 1.777em;
  border-radius: 0.277rem;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 1.5px solid ${({ color }) => color};
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 0.75rem;
    `}
    ${({ size }) =>
    size === "large" &&
    css`
      font-size: 1.25rem;
    `}
`;
