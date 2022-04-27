import styled, {css} from 'styled-components';
import { Tab } from '@headlessui/react';
import Theme from '../../Theme/Theme';

export const StyledTabs = (variant) => {

    if (variant === Tab.List) {
        return styled(variant)`
            display: flex;
            ${({space}) => {
                if (space) {
                    return css`
                        justify-content: space-between;
                    `
                };
            }}
            flex-direction: ${({direction}) => `${direction};`}
            gap: ${({gap}) => `${gap}rem;`}    
        `
    };

    if (variant === Tab) {
        return styled(variant)`
            width: 3.8rem;
            height: 1.9rem;
            background: none;
            ${({tabSize}) => {
                if (tabSize === 'medium') {
                    return css`
                        width: 9.8rem;
                        height: 4.55rem;
                    ` 
                } else if (tabSize === 'large') {
                    return css`
                        width: 25.3rem;
                        height: 11.05rem;
                    `
                };
            }}
        `
    };
    
    if (variant === Tab.Panel) {
        return styled(variant)`
        padding-top: 1rem;
        `
    };
};

export const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    background-color: ${Theme.background.light};
    border: 1px solid ${Theme.border.blue};
    ${({index, selectedTab}) => {
        if (index === selectedTab) {
            return css`
                background-color: ${Theme.background.yellow};
                border: none;
            `
        };
    }}
    border-radius: 0.3rem;
`