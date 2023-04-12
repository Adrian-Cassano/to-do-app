import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import modalSlice from "../slices/modalSlice";
import tagSlice from "../slices/tagSlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState", "modalState", "tagState"],
};

const rootReducer = combineReducers({
  userState: userSlice,
  modalState: modalSlice,
  tagState: tagSlice,
});

const persistedReducer1 = persistReducer(persistConfig, rootReducer);
const persistedReducer2 = persistReducer(persistConfig, rootReducer);
const persistedReducer3 = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer1,
  persistedReducer2,
  persistedReducer3,
  middleware: [thunk],
});

export default store;
