import { configureStore } from "@reduxjs/toolkit";
// reducers
import addRowsReducer from "features/addRowsSlice";

export const store = configureStore({
  reducer: {
    addRows: addRowsReducer,
  },
});
