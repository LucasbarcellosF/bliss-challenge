import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const SearchInput = styled.input`
  max-width: 34.375rem;
  width: 100%;
  border: 0.0625rem solid #4a4a4a;
  border-radius: 0.625rem;
  padding: 0.5625rem 0 0.5625rem 0.875rem;
  font-size: 1.25rem;
  color: #4a4a4a;

  :focus-visible {
    outline-color: #5885f5;
  }

  ::placeholder {
    color: #d0d0d0;
    font-weight: 420;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const LoadButton = styled.button`
  max-width: 12.5rem;
  width: 100%;
  height: 3.125rem;
  background-color: #cc0819;
  border-radius: 0.625rem;
  cursor: pointer;

  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;

  :hover {
    background-color: #ed4553;
  }
`;
