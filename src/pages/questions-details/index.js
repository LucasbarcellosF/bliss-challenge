import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../services/endpoint";
import {
  BackButton,
  BackContainer,
  ChoiceContainer,
  ChoiceInput,
  ChoiceInputLabel,
  ChoicesContainer,
  ChoiceVotes,
  QuestionContainer,
  QuestionTitle,
  ShareButton,
} from "./styles";

const QuestionDetails = () => {
  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLoadQuestionDetails = useCallback(async () => {
    try {
      const questionId = document.location.pathname.split("/")[2];
      const response = await endpoint.get(`questions/${questionId}`);

      setQuestion(response.status === 200 && response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleLoadQuestionDetails();
  }, [handleLoadQuestionDetails]);

  const handleGoBack = () => {
    navigate("/questions");
  };

  const handleUpdateQuestion = async (choice) => {};

  return (
    <>
      <BackContainer>
        <BackButton type="button" onClick={handleGoBack}>
          Go Back
        </BackButton>
      </BackContainer>

      {!isLoading && (
        <QuestionContainer>
          <QuestionTitle>{question.question}</QuestionTitle>

          <ChoicesContainer>
            {question.choices.map(({ choice, votes }) => {
              return (
                <ChoiceContainer key={choice}>
                  <ChoiceInput
                    value={choice}
                    type="checkbox"
                    onClick={() => handleUpdateQuestion(choice)}
                  />
                  <ChoiceInputLabel>{choice}</ChoiceInputLabel>
                  <ChoiceVotes>({votes})</ChoiceVotes>
                </ChoiceContainer>
              );
            })}
          </ChoicesContainer>

          <ShareButton type="button">Share</ShareButton>
        </QuestionContainer>
      )}
    </>
  );
};

export default QuestionDetails;
