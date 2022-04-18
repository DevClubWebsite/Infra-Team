import styled, { css } from "styled-components";
import Theme from "../../Theme/Theme";

export const StyledButtonCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 12.888rem;
  top: 27.555rem;
  background: ${Theme.background.yellow};
  border-radius: 0.227rem;
  padding: 0 0.227rem 0 0.833rem;
  width: 15.444rem;
  height: 3.055rem;
  ${(props) =>
    props.size === "mobile" &&
    css`
      transform: scale(0.7);
    `}
`;

export const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 2.722rem;
  left: 23.611rem;
  top: 27.722rem;
  background: ${Theme.background.dark};
  border-radius: 0.227rem;
`;