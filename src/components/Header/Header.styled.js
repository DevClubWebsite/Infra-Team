import styled from "styled-components";

export const StyledHeader = styled.h1`
    color: ${({ colour }) => colour};
    font-size: ${({ size }) => size}pt;
`;