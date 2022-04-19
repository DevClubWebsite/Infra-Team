import styled, {css} from "styled-components";

export const StyledCard = styled.div`
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    background-color: ${({ color }) => color};
    ${({ border }) =>
    border &&
    css`
      border: 1px solid ${({ border }) => border};
    `}
    border-radius: 0.555rem
`;