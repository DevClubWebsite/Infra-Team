import styled, {css} from 'styled-components';
import { Tab } from '@headlessui/react';

export const StyledTabs = (variant) => {
    if (variant === Tab) {
        return styled(variant)`
            ${({tabSize}) => {
                if (tabSize === 'medium') {
                    return css`
                        width: 100px;
                        hight: 30px;
                    ` 
                }
            }}
            color: red;
        `
    } else if (variant === Tab.Panel) {
        return styled(variant)`
        color: blue;
    `
    }
};