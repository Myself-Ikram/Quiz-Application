import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userIdSlice";
export default function Main() {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  function noteUserId(e) {
    setUserId(e.target.value);
  }
  function storeUserId() {
    dispatch(addUser(userId));
  }
  return (
    <Container>
      <Container>
        <ol>
          <li>You will be asked 10 questions one after another.</li>
          <li>Each question is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one options
          </li>
          <li>You can review and change answers before quiz finish.</li>
          <li>The result will be declared at the end of the Quiz.</li>
          <li>Attempting all questions are mandatory!!!!</li>
        </ol>
      </Container>
      <form className="text-center">
        <input
          type="text"
          className="username-input"
          placeholder="Username*"
          onChange={noteUserId}
        />
      </form>
      <Container className="mt-3 text-center">
        {/* to specifies the route i.e localhost:3000/quiz */}
        <Link
          className="btn btn-color"
          to={userId ? "quiz" : "/"}
          onClick={storeUserId}
        >
          Start Quiz
        </Link>
      </Container>
    </Container>
  );
}
