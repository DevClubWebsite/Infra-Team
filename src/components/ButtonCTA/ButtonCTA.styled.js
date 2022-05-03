import styled, { css } from "styled-components";
import Theme from "../../Theme/Theme";

export const StyledButtonCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.background.yellow};
  border-radius: 0.227rem;
  padding: 0 0.227rem 0 0.833rem;
  min-width: 15.444em;
  min-height: 3.055em;
  font-size: 1rem;
  border: none;
  ${(props) =>
    props.size === "mobile" &&
    css`
      font-size: 0.7rem;
    `}
`;

export const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5em;
  height: 2.722em;
  background: ${Theme.background.dark};
  border-radius: 0.227rem;
  ${(props) =>
    props.size === "mobile" &&
    css`
      font-size: 0.7rem;
    `}
`;
