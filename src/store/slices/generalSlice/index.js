import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
    theme: "light"
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setLanguage, setTheme } = generalSlice.actions;

export default generalSlice.reducer;
