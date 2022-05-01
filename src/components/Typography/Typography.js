import { StyledTypography } from "./Typography.styled";
import PropTypes from "prop-types";
import React from "react";

export default function Typography({ children = 'Text', as, color, weight, size }) {
    return (
        <>
            <StyledTypography weight={weight} as={as} color={color} size={size}>
                {children}
            </StyledTypography>
        </>
    );
}

Typography.propTypes = {
    as: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.number,
    size: PropTypes.number
}