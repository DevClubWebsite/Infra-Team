import { StyledParagraph } from "./Paragraph.styled"

export default function Paragraph({ label, size = 40, colour }) {
    return (
        <StyledParagraph size={size / 1.5} colour={colour} >{label}</StyledParagraph>
    );
}