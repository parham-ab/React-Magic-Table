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
    deleteRows: (state, action) => {
      let filteredRows = state.rows.filter((row) => row.id !== action.payload);
      state.rows = filteredRows;
    },
    editRows: (state, action) => {
      const { id, priority, name } = action.payload;
      const currentTodo = state.rows.find((item) => item.id === id);
      // console.log(currentTodo)
      if (currentTodo) {
        currentTodo.priority = priority;
        currentTodo.name = name;
      }
    },
  },
});

export default tableSlice.reducer;
export const { addRows, deleteRows, editRows } = tableSlice.actions;
