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
  `;
  return <Container {...props} />;
};
