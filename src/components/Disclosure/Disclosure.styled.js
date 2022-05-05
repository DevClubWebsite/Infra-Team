import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  width: ${({ width }) => width}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ background }) => background};
  border: 1px solid ${({ border }) => border};
  border-radius: 0.277rem;
  padding: 0.2rem;
`;

export const StyledDisclosure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ width }) => width}rem;
  padding: 0.2rem 0.4rem;
`;

export const StyledDisclosureButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  min-width: 100%;
  padding: 0.5rem 0.5rem;
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