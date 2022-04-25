import styled from 'styled-components';

export const StyledListBox = styled.button`
    width: 300px;
    height: 50px;
`

export function StyledListBoxButton(Component) {
    return styled(Component)`
        color: red;
    `
}