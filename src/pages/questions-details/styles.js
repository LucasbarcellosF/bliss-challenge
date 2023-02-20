import styled from "styled-components";

export const BackContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const BackButton = styled.button`
  max-width: 10.9375rem;
  width: 100%;
  height: 1.875rem;
  background-color: #cc0819;
  border-radius: 0.375rem;
  cursor: pointer;

  font-size: 1rem;
  text-align: center;
  color: #ffffff;

  :hover {
    background-color: #ed4553;
  }
`;

export const QuestionTitle = styled.span``;

export const QuestionContainer = styled.div`
  width: 14.375rem;
  height: 10rem;
  padding: 1.25rem;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.625rem;
`;

export const ChoicesContainer = styled.div`
  text-align: start;
  margin-top: 1.25rem;
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

export const ShareButton = styled.button`
  margin: 1.25rem 0;
  background-color: #3071fc;
  color: #ffffff;
  width: 6.25rem;
  border-radius: 0.3125rem;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: #5288fa;
  }
`;

export const ChoiceInput = styled.input``;
