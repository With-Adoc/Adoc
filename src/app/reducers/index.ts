import { combineReducers } from "redux";

import selfDiagnosisSlice from "./selfDiagnosis";
import customerFeedbackSurvey from "./customerFeedbackSurvey";
import hospitalSearch from "./hospitalSearch";

const rootReducer = (state, action) => {
  return combineReducers({
    selfDiagnosisSlice,
    customerFeedbackSurvey,
    hospitalSearch,
  })(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
