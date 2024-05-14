import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "./localstorage";

type SearchData = { hospitalNm: string; date: string } | [];

const hospitalSearch = createSlice({
  name: "ref",
  initialState: {
    hospitalSearchData:
      LocalStorage.getItem("adocSearchData") !== null
        ? JSON.parse(LocalStorage.getItem("adocSearchData"))
        : [],
  },
  reducers: {
    setSearchData: (state, action) => {
      state.hospitalSearchData = action.payload;
    },
  },
});

export const { setSearchData } = hospitalSearch.actions;
export default hospitalSearch.reducer;
