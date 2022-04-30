import { Dialog } from "@headlessui/react";
import styled from "styled-components";
import Theme from "../../Theme/Theme";

export const StyledDiv = styled.div`
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    background-color: ${({ background }) => background};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledDialog = (variant) => {
    if (variant === Dialog.Title) {
        return styled(variant)`
            color: ${({ titlecolor }) => titlecolor};
                   
        `;
    }
    if (variant === Dialog) {
        return styled(variant)`
            background-color: ${Theme.background.dark};
            width: ${({ dialogwidth }) => dialogwidth}em;
            height: ${({ dialogheight }) => dialogheight}em;
        `;
    }
    if (variant === Dialog.Description) {
        return styled(variant)`
            color: ${({ descriptioncolor }) => descriptioncolor};
        `;
    }
}