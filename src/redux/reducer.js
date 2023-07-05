import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "globalState",
  initialState: {
    topStories: null,
    searchResults: [],
  },
  reducers: {
    setTopStories: (state, action) => {
      state.topStories = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setTopStories, setSearchResults } = stateSlice.actions;

export default stateSlice.reducer;
