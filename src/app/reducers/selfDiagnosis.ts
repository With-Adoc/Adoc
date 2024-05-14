import { createSlice } from "@reduxjs/toolkit";

const selfDiagnosisSlice = createSlice({
  name: "ref",
  initialState: { userAnswer: [] },
  reducers: {
    setAnswers: (state, action) => {
      state.userAnswer = action.payload;
    },
  },
});

export const { setAnswers } = selfDiagnosisSlice.actions;
export default selfDiagnosisSlice.reducer;
