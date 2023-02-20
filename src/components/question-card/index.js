import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChoiceContainer,
  ChoiceInputLabel,
  ChoicesContainer,
  ChoiceVotes,
  Container,
  Title,
} from "./styles";

const QuestionCard = ({ props }) => {
  const { id, question, choices } = props;
  const navigate = useNavigate();

  const handleGoToDetails = () => {
    navigate(`/questions/${id}`);
  };

  return (
    <Container onClick={handleGoToDetails}>
      <Title>{question}</Title>
      <ChoicesContainer>
        {choices.map(({ choice, votes }) => {
          return (
            <ChoiceContainer key={choice}>
              <ChoiceInputLabel>{choice}</ChoiceInputLabel>
              <ChoiceVotes>({votes})</ChoiceVotes>
            </ChoiceContainer>
          );
        })}
      </ChoicesContainer>
    </Container>
  );
};

export default QuestionCard;
