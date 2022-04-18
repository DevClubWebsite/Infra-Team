import styled, { css } from "styled-components";
import Colors from "../../Theme/Theme";

export const StyledButtonCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 232px;
  top: 496px;
  background: ${Colors.colors.yellow.primary};
  border-radius: 5px;
  padding: 0 5px 0 15px;
  width: 278px;
  height: 55px;
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
  width: 81px;
  height: 49px;
  left: 425px;
  top: 499px;
  background: ${Colors.colors.blue.tertiary};
  border-radius: 5px;
`;
