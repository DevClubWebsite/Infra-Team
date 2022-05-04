import styled, {css} from 'styled-components';

export const StyledBox = styled.div`
    min-width: ${({width}) => width*2}rem;
    min-height: ${({height}) => height*2}rem;
    display: flex;
    flex-direction: column;
    background-color: ${({background}) => background};
    border: 1px solid ${({border}) => border};
    border-radius: 0.277rem;
`;

export const StyledDisclosure = styled.div`
    min-width: ${({width}) => width}rem;
    min-height: ${({height}) => height}rem;
    padding: 0.2rem;
    margin-bottom: 10px;
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

export const StyledChevronUpIcon = styled.i`
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    border: solid ${({color}) => color};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 1rem;
`