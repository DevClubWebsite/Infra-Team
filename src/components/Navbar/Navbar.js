import React from "react";
import { StyledNavbar } from "./Navbar.styled";
import PropTypes from 'prop-types';
import NavbarButton from '../NavbarButton/NavbarButton';
import { v4 as uuidv4 } from "uuid";
import GlobalStyles from "../../Theme/Global";

function Navbar({ items, direction = 'row', gap = 1 }) {
    return <>
        <GlobalStyles />
        <StyledNavbar direction={direction} gap={gap}>
            <ul>
                {items.map(item => {
                    return (
                        <li key={uuidv4()}>
                            <NavbarButton label={item.label} url={item.url}/>
                        </li>
                    )
                })}
            </ul>
        </StyledNavbar>
    </>
};
Navbar.propTypes = {
    items: PropTypes.array.isRequired,
    direction: PropTypes.oneOf(['row', 'column']),
    gap: PropTypes.number
};

export default Navbar;