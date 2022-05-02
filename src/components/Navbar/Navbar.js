import React, { useState } from "react";
import { StyledNavbar } from "./Navbar.styled";
import PropTypes from "prop-types";
import NavbarButton from "../NavbarButton/NavbarButton";

function Navbar({ items, direction = "row", gap = 1}) {
  const [focusedElement, setFocusedElement] = useState(0);

  return (
    <>
      <StyledNavbar direction={direction} gap={gap}>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavbarButton
                  text={item.text}
                  url={item.url}
                  focusedElement={focusedElement}
                  setFocusedElement={setFocusedElement}
                  id={index}
                />
              </li>
            );
          })}
        </ul>
      </StyledNavbar>
    </>
  );
}
Navbar.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  gap: PropTypes.number,
};

export default Navbar;
