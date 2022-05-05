import styled from "styled-components";

export const StyledBox = styled.div`
  width: ${({ width }) => width}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ background }) => background};
  border: 1px solid ${({ border }) => border};
  border-radius: 0.277rem;
  padding: 0.2rem 0;

  span {
    max-width: ${({ width }) => width}rem;
  }
`;

export const StyledDisclosure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ width }) => width}rem;
  padding: 0.2rem 0;
`;

export const StyledDisclosureButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  min-width: 95%;
  padding: 0.5rem 0.2rem;
  background: none;
  background-color: ${({ backgroundButton }) => backgroundButton};
  border: 1px solid ${({ border }) => border};
  border-radius: 0.277rem;
  color: ${({ color }) => color};
`;

export const StyledDisclosurePanel = styled.div`
  padding-top: 1rem;
  color: ${({ color }) => color};
`;

export const StyledChevronUpIcon = styled.i`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  border: solid ${({ color }) => color};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 1rem;
`;
