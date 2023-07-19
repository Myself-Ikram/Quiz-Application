import { configureStore } from "@reduxjs/toolkit";
import userIdSlice from "./userIdSlice";
import questionsSlice from "./questionsSlice";
const store = configureStore({
  reducer: {
    userId: userIdSlice,
    questions: questionsSlice,
  },
});

export default store;
