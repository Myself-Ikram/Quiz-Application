import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import fetchQuestions from "../hooks/FetchQuestions";

export default function Questions(props) {
  fetchQuestions();
  const allQuestions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  function onSelect(i) {
    props.option(i);
  }
  return (
    <Container className="mt-5">
      <h6>{allQuestions?.question}</h6>
      <ul className="mt-4">
        {allQuestions?.options.map((opt, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              <input
                type="radio"
                name="options"
                value="true"
                id={"q" + index + "-option"}
                onChange={() => onSelect(index)}
                className="bg-info"
              />
              <label htmlFor={"q" + index + "-option"} className="ps-3">
                {opt}
              </label>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
