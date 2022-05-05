import styled, { css } from "styled-components";

export const StyledTitle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-size: 1rem;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 0.277rem;
  cursor: pointer;
  margin-bottom: -3px;
`;

export const StyledItem = styled.div`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  line-height: ${({ height }) => height}rem;
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
