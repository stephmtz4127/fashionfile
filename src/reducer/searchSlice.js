import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerms: "",
};

const searchSlice = createSlice({
  name: "searchTerms",
  initialState,
  reducers: {
    setSearchTerms: (state, action) => {
      state.searchTerms = action.payload;
    },
  },
});

export const SearchReducer = searchSlice.reducer;
export const { setSearchTerms } = searchSlice.actions;
export const getSearchTerms = (state) => state.searchTerms.searchTerms;
