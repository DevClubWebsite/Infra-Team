import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import PropTypes from "prop-types";

export default function HeaderParagraph({ size, headerLabel, paragraphLabel, headerColour, paragraphColour }) {
    const sizes = [40, 32, 26, 24, 22];
    return (
        <>
            <Header label={headerLabel} size={sizes[size - 1]} colour={headerColour} />
            <Paragraph label={paragraphLabel} size={sizes[size - 1]} colour={paragraphColour} ></Paragraph>
        </>
    )
}

HeaderParagraph.propTypes = {
    size: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    headerLabel: PropTypes.string,
    paragraphLabel: PropTypes.string
}