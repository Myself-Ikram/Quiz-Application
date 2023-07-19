import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Heading() {
  const username = useSelector((state) => state.userId.userName);
  return (
    <Container>
      <div className="heading-title text-center">
        <h1>Quiz Application</h1>
        <p>Hello {username} </p>
      </div>
    </Container>
  );
}
