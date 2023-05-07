import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import generalSlice from "./slices/generalSlice";

export default configureStore({
  reducer: {
    projectSlice,
    generalSlice
  }
});
