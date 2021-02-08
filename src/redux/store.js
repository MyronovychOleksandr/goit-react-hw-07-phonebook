import { configureStore } from "@reduxjs/toolkit";
import phBookReducer from "./phonebookReducers";

const store = configureStore({
  reducer: {
    phonebook: phBookReducer,
  },
});

export default store;
