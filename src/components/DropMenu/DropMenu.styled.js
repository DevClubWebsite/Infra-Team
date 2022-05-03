import styled, { css } from "styled-components";

export const StyledMenuButton = styled.button`
  text-align: left;
  border-radius: 5px;
  background: ${({ background }) => background};
  font-size: 1em;
  padding: 0 0 0 1em;
  min-width: ${({ width }) => width}em;
  min-height: ${({ height }) => height}em;
  color: ${({ color }) => color};
  margin-bottom: 5px;
  cursor: pointer;
`;

export const StyledItem = styled.a`
  cursor: pointer;
  display: block;
  padding: 0 0 0 1em;
  background: ${({ background }) => background};
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  line-height: ${({ height }) => height}em;
  color: ${({ color }) => color};
  border-bottom: 1px solid ${({ color }) => color};
  ${({ active, hover }) =>
    active &&
    css`
      &:hover {
        background: ${hover};
      }
    `}
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
    border: none;
  }
  &:only-child {
    border-radius: 5px;
    border: none;
  }
`;
