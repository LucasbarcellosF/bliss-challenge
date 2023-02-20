import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #cc0819;
  height: 4.1875rem;
  max-width: 18.75rem;
  width: 100%;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #ed4553;
  }

  color: #ffffff;
  font-weight: 450;
  font-size: 1.875rem;
`;
