import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsAwardFill } from "react-icons/bs";
import { BiAward } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import resetData from "../store/questionsSlice";
import resetUser from "../store/userIdSlice";
import { publishData } from "../hooks/SetResult";
import { Navigate } from "react-router-dom";
export default function Result() {
  let score = 0;
  const {
    questions: { queue, answer },
    userId: { userName, result },
  } = useSelector((state) => state);
  for (let i = 0; i < queue.length; i++) {
    if (answer[i] === result[i]) {
      score = score + 10;
    }
  }

  const achieved = score > 60 ? "PASSED" : "FAILED";
  const dispatch = useDispatch();
  const all = {
    username: userName,
    result,
    attempts: queue.length,
    points: score,
    achieved,
  };
  publishData(all);
  function reset() {
    dispatch(resetData());
    dispatch(resetUser());
  }
  if (userName === "") {
    return <Navigate to={"/"} replace="true"></Navigate>;
  }
  return (
    <Container className="text-light" style={{ width: "560px" }}>
      <Container className="border">
        <Row className="px-3 py-2" style={{ fontSize: "12px" }}>
          <Col>
            <p>Username:</p>
            <p>Total Quiz Points:</p>
            <p>Total Questions:</p>
            <p>Total Attempts:</p>
            <p>Total Earn Points:</p>
            <p>Quiz Result:</p>
          </Col>
          <Col className="text-end">
            <p>{userName || "Unknown"} </p>
            <p>{queue?.length * 10}</p>
            <p>{all.attempts}</p>
            <p>10</p>
            <p>{score}</p>
            <p
              className={achieved === "FAILED" ? "text-danger" : "text-success"}
            >
              {achieved}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <Link
          to={"/"}
          className="btn btn-color btn-dark my-2"
          style={{
            height: "25px",
            width: "70px",
            fontSize: "10px",
          }}
          onClick={reset}
        >
          Restart
        </Link>
      </Container>
      <Container>
        <Table bordered variant="light border" hover>
          <thead>
            <tr>
              <th>Standing</th>
              <th>Name</th>
              <th>Attempts</th>
              <th>Earn Points</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody className="bg-light text-center">
            <tr>
              <td>
                <BsAwardFill />
              </td>
              <td>ShaDE</td>
              <td>3</td>
              <td>50</td>
              <td>Passed</td>
            </tr>
            <tr>
              <td>
                <BiAward />
              </td>
              <td>Ikram</td>
              <td>6</td>
              <td>30</td>
              <td>Passed</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
