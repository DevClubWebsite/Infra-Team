import styled from "styled-components";
import Theme from "../../Theme/Theme";

export const StyledMenuButton = styled.button`
  text-align: left;
  border-radius: 5px;
  background: #121231;
  font-size: 1em;
  padding: 0 0 0 1em;
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  color: ${Theme.typography.white};
  margin-bottom: 5px;
  cursor: pointer;
`;

export const StyledItem = styled.div`
  padding: 0 0 0 1em;
  background: #121231;
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  line-height: ${({ height }) => height}em;
  color: ${Theme.typography.white};
  border-bottom: 1px solid ${Theme.typography.white};
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
