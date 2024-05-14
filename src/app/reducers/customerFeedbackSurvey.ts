import { createSlice } from "@reduxjs/toolkit";

const customerFeedbackSurvey = createSlice({
  name: "ref",
  initialState: { customerFeedback: [] },
  reducers: {
    setFeedback: (state, action) => {
      state.customerFeedback = action.payload;
    },
  },
});

export const { setFeedback } = customerFeedbackSurvey.actions;
export default customerFeedbackSurvey.reducer;
