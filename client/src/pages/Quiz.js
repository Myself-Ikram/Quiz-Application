import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Questions from "../components/Questions";
import { moveNext, movePre } from "../store/questionsSlice";
import { pushResult, updateOption } from "../store/userIdSlice";
import { Navigate } from "react-router-dom";
export default function Quiz() {
  const [selectedOption, setOption] = useState(0);
  const dispatch = useDispatch();
  const { trace, queue } = useSelector((state) => state.questions);
  const { result, userName } = useSelector((state) => state.userId);

  function onPrev() {
    if (trace > 0) {
      dispatch(movePre());
      dispatch(updateOption());
    }
  }
  function onNext() {
    if (trace < queue.length) {
      dispatch(moveNext());
      dispatch(pushResult(selectedOption));
    }
  }
  function accessOption(i) {
    setOption(i);
  }

  if (result.length && result.length === queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }
  if (userName === "") {
    return <Navigate to={"/"} replace="true"></Navigate>;
  }

  return (
    <Container className="text-light" style={{ width: "560px" }}>
      {/* Questions */}
      <Questions option={accessOption} />
      {/* Slide */}
      <Container>
        <Row className=" mt-5">
          <Col className="text-start">
            {trace > 0 ? (
              <button
                onClick={onPrev}
                className="btn-color btn-dark"
                style={{
                  height: "25px",
                  width: "70px",
                  fontSize: "10px",
                }}
              >
                Prev
              </button>
            ) : (
              <></>
            )}
          </Col>
          <Col className="text-end">
            <button
              onClick={onNext}
              className="btn-color btn-dark"
              style={{
                height: "25px",
                width: "70px",
                fontSize: "10px",
              }}
            >
              {trace === 9 ? "Finish" : "Next"}
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
