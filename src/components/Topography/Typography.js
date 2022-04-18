import { StyledTypography } from "./Typography.styled";
import PropTypes from "prop-types";
import GlobalStyles from "../../Theme/Global";

export default function Typography({ label, type, color, weight }) {

    return (
        <>
            <GlobalStyles />
            <StyledTypography weight={weight} type={type} color={color} >{label}</StyledTypography>
        </>
    );
}

Typography.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.number
}