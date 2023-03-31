import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import modalSlice from "../slices/modalSlice";
import tagSlice from "../slices/tagSlice";

const store = configureStore({
  reducer: {
    userSlice,
    modalSlice,
    tagSlice,
  },
});

export default store;
