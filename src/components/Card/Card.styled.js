import styled from "styled-components";

export const StyledCard = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ color }) => color};
    border-radius: 10px;
`;