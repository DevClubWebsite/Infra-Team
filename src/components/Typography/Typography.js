import { StyledTypography } from "./Typography.styled";
import PropTypes from "prop-types";
import GlobalStyles from "../../Theme/Global";

export default function Typography({ label, variant, color, weight }) {
    return (
        <>
            <GlobalStyles />
            <StyledTypography weight={weight} variant={variant} color={color} >{label}</StyledTypography>
        </>
    );
}

Typography.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.number
}