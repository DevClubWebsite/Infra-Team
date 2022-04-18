import styled, { css } from "styled-components";

export const StyledTypography = styled.h1`
    color: ${({ color }) => color};
    ${({ weight }) => {
        weight && css`
            font-weight: ${weight};
        `;
    }}
`;