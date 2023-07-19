import { useEffect, useState } from "react";
import { importQuestions } from "../store/questionsSlice";
import { useDispatch } from "react-redux";
import { getServerData } from "./helper";

export default function FetchQuestions() {
  const dispatch = useDispatch();
  const [dataInfo, setDataInfo] = useState({
    isLoading: false,
    serverError: false,
    getApi: [],
  });
  useEffect(() => {
    setDataInfo((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let [{ questions, answers }] = await getServerData(
          "http://localhost:5000/api/questions"
        );
        console.log(questions, answers);
        if (questions.length > 0) {
          setDataInfo((pre) => ({ ...pre, isLoading: false }));
          setDataInfo((pre) => ({ ...pre, getApi: questions }));
          dispatch(importQuestions(questions));
        }
      } catch (error) {
        setDataInfo((pre) => ({ ...pre, isLoading: false }));
        setDataInfo((pre) => ({ ...pre, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [dataInfo, setDataInfo];
}
