import { createSlice, nanoid } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "crud-table",
  initialState: {
    rows: [],
  },
  reducers: {
    addRows: {
      reducer: (state, action) => {
        state.rows.push(action.payload);
      },
      prepare: (priority, name) => {
        return {
          payload: { id: nanoid(), priority, name },
        };
      },
    },
  },
});

export default tableSlice.reducer;
export const { addRows } = tableSlice.actions;
