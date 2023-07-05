import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "globalState",
  initialState: {
    topStories: null,
    searchResults: [],
    savedArticles: [],
  },
  reducers: {
    setTopStories: (state, action) => {
      state.topStories = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addSavedArticles: (state, action) => {
      state.savedArticles.push(action.payload);
    },
    removeSavedArticles: (state, action) => {
      state.savedArticles = state.savedArticles.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
});

export const {
  setTopStories,
  setSearchResults,
  addSavedArticles,
  removeSavedArticles,
} = stateSlice.actions;

export default stateSlice.reducer;
