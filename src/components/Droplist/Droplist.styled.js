import styled, { css } from "styled-components";

export const StyledTitle = styled.button`
  font-size: 1em;
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: -3px;
`;

export const StyledItem = styled.div`
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  line-height: ${({ height }) => height}em;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  cursor: pointer;
  padding-left: 1em;
  border-top: 1px solid ${({ color }) => color};
  position: relative;
  z-index: 1;
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
  &:hover {
    background: ${({ hover }) => hover};
  }
  ${({ pick }) =>
    pick &&
    css`
      background: ${({ hover }) => hover};
    `}
  ${({ error }) =>
    error &&
    css`
      cursor: not-allowed;
    `}
`;
