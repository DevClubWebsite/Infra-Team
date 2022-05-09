import styled, { css } from "styled-components";
import React from "react";

export const StyledTypography = ({ ...props }) => {
  const Container = styled(props.variant)`
    color: ${(props) => props.color};
    ${(props) => {
      props.weight &&
        css`
          font-weight: ${props.weight};
        `;
    }}
    ${({ size }) => {
      if (size) {
        return css`
          font-size: ${size}rem;
        `;
      }
    }}
  `;
  return <Container {...props} />;
};
