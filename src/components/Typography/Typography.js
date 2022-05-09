import { StyledTypography } from "./Typography.styled";
import PropTypes from "prop-types";
import React from "react";

export default function Typography({ children = 'Text', variant, color, weight, size }) {
    return (
        <>
            <StyledTypography weight={weight} variant={variant} color={color} size={size}>
                {children}
            </StyledTypography>
        </>
    );
}

Typography.propTypes = {
    variant: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.number,
    size: PropTypes.number
}