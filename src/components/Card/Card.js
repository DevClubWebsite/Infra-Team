import { StyledCard } from "./Card.styled"
import PropTypes from "prop-types";
import GlobalStyles from "../../Theme/Global";
import React from "react";

export default function Card({ width = 12.222, height = 14.222, color = "#F6C927", border}) {
    return (
        <>
        <GlobalStyles/>
        <StyledCard width={width} height={height} color={color} border={border}/>
        </>
    );
}

Card.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    border: PropTypes.string
}
