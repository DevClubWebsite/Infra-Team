import { StyledCard } from "./Card.styled"
import PropTypes from "prop-types";
export default function Card({ size = "medium", color = "#F6C927" }) {
    const dimensions = {
        small: { width: 220, height: 256 },
        medium: { width: 465, height: 300 },
        large: { width: 1453, height: 530 }
    }
    return (
        <StyledCard width={dimensions[size].width} height={dimensions[size].height} color={color} />
    );
}

Card.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string
}
