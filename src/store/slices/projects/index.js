import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: []
  },
  reducers: {}
});

export default projectSlice.reducer;
