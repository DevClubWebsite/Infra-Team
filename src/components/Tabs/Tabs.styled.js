import styled, {css} from 'styled-components';
import { Tab } from '@headlessui/react';

export const StyledTabs = (variant) => {

    if (variant === Tab.List) {
        return styled(variant)`
            display: flex;
            flex-direction: ${({tabDirection}) => `${tabDirection};`}
            gap: ${({tabGap}) => `${tabGap}rem;`}            
        `
    }

    if (variant === Tab) {
        return styled(variant)`
            border-radius: 0.555rem;
            width: 3.8rem;
            height: 1.9rem;
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
                }
            }}
            color: red;
        `
    }
    
    if (variant === Tab.Panel) {
        return styled(variant)`
        color: blue;
    `
    }
};