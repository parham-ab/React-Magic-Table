import { createSlice } from "@reduxjs/toolkit";

export const addRowsSlice = createSlice({
  name: "addCase",
  initialState: {
    rows: {},
  },
  reducers: {
    updateBaseInfo: (state, action) => {
      return {
        ...state,
        baseInfoForm: action.payload,
      };
    },
  },
});

export const { addRows } = addRowsSlice.actions;

export default addRowsSlice.reducer;
