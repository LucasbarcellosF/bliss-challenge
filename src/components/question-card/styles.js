import styled from "styled-components";

export const Container = styled.div`
  max-width: 15rem;
  max-height: 8.125rem;
  width: 100%;
  height: 100vw;

  background: #e6e6e6;
  border-radius: 0.625rem;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.15);
  padding: 0.625rem;
`;

export const Title = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #4a4a4a;
`;

export const ChoicesContainer = styled.div`
  margin-top: 0.625rem;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ChoiceInputLabel = styled.label`
  margin-right: 0.625rem;
`;

export const ChoiceVotes = styled.span`
  font-size: 0.75rem;
`;
