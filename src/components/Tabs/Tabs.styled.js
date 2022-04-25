import styled, {css} from 'styled-components';
import { Tab } from '@headlessui/react';

export const StyledTabs = (variant) => {

    if (variant === Tab.List) {
        return styled(variant)`
            display: flex;
            gap: ${({tabGap}) => `${tabGap}rem;`}            
        `
    }

    if (variant === Tab) {
        return styled(variant)`
            ${({tabSize}) => {
                if (tabSize === 'medium') {
                    return css`
                        width: 9.8rem;
                        height: 4.55rem;
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