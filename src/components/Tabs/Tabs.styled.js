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
    };
    
    if (variant === Tab.Panel) {
        return styled(variant)`
            padding-top: 1rem;
        `
    };
};