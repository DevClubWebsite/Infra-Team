import styled, { css } from "styled-components";

export const StyledTypography = ({ ...props }) => {
    const Container = styled(props.variant)`
        color: ${( props ) => props.color};
        ${( props ) => {
            props.weight && css`
                font-weight: ${props.weight};
            `;
        }}
    `
    return <Container {...props} />
}
