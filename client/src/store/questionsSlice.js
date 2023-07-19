import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answer: [1, 1, 2, 1, 0, 2, 0, 2, 2, 0],
    trace: 0,
  },
  reducers: {
    importQuestions(state, action) {
      return {
        ...state,
        queue: action.payload,
      };
    },
    movePre(state) {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    moveNext(state) {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    resetData() {
      return {
        queue: [],
        answer: [1, 1, 2, 1, 0, 2, 0, 2, 2, 0],
        trace: 0,
      };
    },
  },
});

export const { importQuestions, moveNext, movePre, resetData } =
  questionSlice.actions;
export default questionSlice.reducer;
