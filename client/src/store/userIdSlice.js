import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    result: [],
    userName: "",
  },
  reducers: {
    addUser(state, action) {
      state.userName = action.payload;
    },
    pushResult(state, action) {
      state.result.push(action.payload);
    },
    updateOption(state) {
      state.result.pop();
    },
    resetUser() {
      return {
        result: [],
        userName: "",
      };
    },
  },
});

export const { addUser, pushResult, resetUser, updateOption } =
  userIdSlice.actions;
export default userIdSlice.reducer;
