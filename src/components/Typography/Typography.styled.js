import styled, { css } from "styled-components";
import React from "react";

export const StyledTypography = ({ ...props }) => {
<<<<<<< HEAD
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
=======
    const Container = styled(props.as)`
        color: ${( props ) => props.color};
        ${( props ) => {
            props.weight && css`
                font-weight: ${props.weight};
            `;
        }}
        ${({size}) => {
            if (size) {
                return css`
                    font-size: ${size}rem;
                `
            }
        }}
    `
    return <Container {...props} />
}
>>>>>>> cfdebf517f5a9dcb2bd7d135c397c3b12172419c
