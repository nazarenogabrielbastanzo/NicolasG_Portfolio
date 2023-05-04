import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import languageSlice from "./slices/languageSlice";

export default configureStore({
  reducer: {
    projectSlice,
    languageSlice
  }
});
