import { StyledHeader } from "./Header.styled";

export default function Header({ label, size = 40, colour }) {
    return (
        <>
            <StyledHeader size={size} colour={colour}>{label}</StyledHeader>
        </>
    )
}