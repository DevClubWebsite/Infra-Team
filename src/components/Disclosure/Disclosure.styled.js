import styled, {css} from 'styled-components';

export const StyledBox = styled.div`
    min-width: ${({width}) => width*2}rem;
    min-height: ${({height}) => height*2}rem;
    display: flex;
    ${({space}) => {
        if (space === "true") {
            return css`
                justify-content: space-between;
            `
        };
    }}
    flex-direction: ${({direction}) => `${direction};`}
    gap: ${({gap}) => `${gap}rem;`}
    background-color: ${({background}) => background};
    border: 1px solid ${({border}) => border};
    border-radius: 0.277rem;
`;

export const StyledDisclosure = styled.div`
    min-width: ${({width}) => width}rem;
    min-height: ${({height}) => height}rem;
    padding: 0.2rem;
`;

export const StyledDisclosureButton = styled.button`
    min-width: ${({width}) => width-1}rem;
    min-height: ${({height}) => height-1}rem;
    padding: 0.2rem;
    background: none;
    background-color: ${({backgroundButton}) => backgroundButton};
    border: 1px solid ${({border}) => border};
    border-radius: 0.277rem;
    color: ${({color}) => color};
`;

export const StyledDisclosurePanel = styled.div`
    padding-top: 1rem;
    color: ${({color}) => color};
`