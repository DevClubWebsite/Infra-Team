import styled from "styled-components";

export const StyledNavbar = styled.nav`
    ul {
        display: flex;
        flex-direction: ${({direction}) => direction};
        gap: ${({gap}) => `${gap}rem`}
    }
`