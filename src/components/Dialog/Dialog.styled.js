import { Dialog } from "@headlessui/react";
import styled from "styled-components";

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
}