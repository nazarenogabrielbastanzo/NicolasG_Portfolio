import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    project: {}
  },
  reducers: {
    setProjectList: (state, action) => {
      state.list = action.payload;
    },
    setProject: (state, action) => {
      state.project = action.payload;
    }
  }
});

export const { setProjectList, setProject } = projectSlice.actions;

export default projectSlice.reducer;
