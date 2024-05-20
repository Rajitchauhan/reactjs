import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSllice";

export const store = configureStore({
  reducer: todoReducer,
});
