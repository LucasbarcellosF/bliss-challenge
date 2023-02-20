import React, { useEffect, useCallback, useState, useRef } from "react";
import { endpoint } from "../../services/endpoint";
import QuestionCard from "../../components/question-card/index";
import {
  Container,
  InputContainer,
  LoadButton,
  LoadContainer,
  SearchInput,
} from "./styles";

const QuestionList = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const searchInput = useRef(null);

  const getQuestions = useCallback(async () => {
    try {
      const response = await endpoint.get("questions");

      setQuestionsList(response.status === 200 ? response.data : []);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const handleSearchQuery = useCallback(() => {
    const search = document.location.search;

    if (search && search.includes("=")) setSearchQuery(search.split("=")[1]);

    if (search && search.includes("=") && !search.split("=")[1].length)
      searchInput.current.focus();
  }, []);

  useEffect(() => {
    handleSearchQuery();
  }, [handleSearchQuery]);

  const handleLoadQuestions = async () => {
    try {
      const newOffset = offset + 10;
      const response = await endpoint.get(`questions?offset=${newOffset}`);

      if (response.status === 200) {
        setQuestionsList((prevQuestionsList) => [
          ...prevQuestionsList,
          ...response.data,
        ]);
        setOffset(newOffset);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <InputContainer>
        <SearchInput
          ref={searchInput}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.value)}
        />
      </InputContainer>

      <Container>
        {questionsList.map((question) => {
          return <QuestionCard key={question.id} props={question} />;
        })}
      </Container>

      <LoadContainer>
        <LoadButton type="button" onClick={handleLoadQuestions}>
          Load More
        </LoadButton>
      </LoadContainer>
    </>
  );
};

export default QuestionList;
