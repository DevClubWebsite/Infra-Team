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
  const color = focusedElement === id
      ? Theme.typography.yellow
      : Theme.typography.white;

  const changeColor = (id) => {
    console.log(id);
    setFocusedElement(id);
  };

  return (
    <>
      <StyledNavbarButton
        target="_blank"
        colour={color}
        href={url}
        onClick={() => changeColor(id)}
      >
        {label}
      </StyledNavbarButton>
    </>
  );
}
