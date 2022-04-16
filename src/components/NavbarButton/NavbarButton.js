import React from "react";
import { StyledNavbarButton } from "./NavbarButton.styled";
import Theme from "../../Theme/Theme";

export default function NavbarButton({ label, url, focused }) {
    const colour = focused ? Theme.colours.yellow.primary : Theme.colours.blue.primary;

    return (
        <>
            <StyledNavbarButton target="_blank" colour={colour} href={url}>{label}</StyledNavbarButton>
        </>
    )
}