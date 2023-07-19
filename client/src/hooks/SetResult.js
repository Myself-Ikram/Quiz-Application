import { useDispatch } from "react-redux";
import { pushResult } from "../store/userIdSlice";
import { postServerData } from "./helper";

export default function PushAnswer(result) {
  const dispatch = useDispatch();
  (async () => {
    try {
      await dispatch(pushResult(result));
    } catch (error) {
      console.log(error);
    }
  })();
}

export function publishData(data) {
  const { result, username } = data;
  (async () => {
    try {
      if (!username && result !== []) throw Error("Result is not stored");
      await postServerData("http://localhost:5000/api/result", data);
    } catch (error) {
      console.log(error);
    }
  })();
}
