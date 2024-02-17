import { configureStore } from "@reduxjs/toolkit";
// reducers
import tableReducer from "features/tableSlice";

export const store = configureStore({
  reducer: tableReducer,
});
