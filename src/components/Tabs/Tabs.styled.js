import styled, {css} from 'styled-components';

export const StyledTab = styled.button`
    min-width: ${({width}) => width}rem;
    min-height: ${({height}) => height}rem;
    padding: 0.2rem;
    background: none;
    background-color: ${({background}) => background};
    border: 1px solid ${({border}) => border};
    border-radius: 0.277rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`

export const StyledTabPanel = styled.div`
    padding-top: 1rem;
`

export const StyledTabList = styled.div`
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
`