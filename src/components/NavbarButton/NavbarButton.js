import React from "react";
import { StyledNavbarButton } from "./NavbarButton.styled";
import Theme from "../../Theme/Theme";

export default function NavbarButton({
  label,
  url,
  focusedElement,
  setFocusedElement,
  id,
}) {
  const colour =
    focusedElement === id
      ? Theme.colors.yellow.primary
      : Theme.colors.white.primary;

  const changeColor = (id) => {
    console.log(id);
    setFocusedElement(id);
  };

  return (
    <>
      <StyledNavbarButton
        target="_blank"
        colour={colour}
        href={url}
        onClick={() => changeColor(id)}
      >
        {label}
      </StyledNavbarButton>
    </>
  );
}
