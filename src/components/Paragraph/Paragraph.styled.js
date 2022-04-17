import styled from "styled-components";

export const StyledParagraph = styled.p`
    color: ${({ colour }) => colour};
    font-size: ${({ size }) => size}pt;
`