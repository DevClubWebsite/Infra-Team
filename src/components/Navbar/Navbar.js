import React from "react";
import { StyledNavbar } from "./Navbar.styled";
import PropTypes from 'prop-types';

function Navbar({ items, direction = 'row', gap = 1 }) {
    return (
        <StyledNavbar direction={direction} gap={gap}>
            <ul>
                {items.map(item => {
                    return (
                        <li>
                            <a href={item[1]}>{item[0]}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledNavbar>
    )
};
Navbar.propTypes = {
    items: PropTypes.array.isRequired,
    direction: PropTypes.oneOf(['row', 'column']),
    gap: PropTypes.number
}

export default Navbar;