import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
    theme: "light",
    isLoading: false
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setLanguage, setTheme, setIsLoading } = generalSlice.actions;

export default generalSlice.reducer;
