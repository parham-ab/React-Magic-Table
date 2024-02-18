import { createSlice, nanoid } from "@reduxjs/toolkit";

const magic_table_data =
  localStorage.getItem("magic-table-data") != null
    ? JSON.parse(localStorage.getItem("magic-table-data"))
    : [];

export const tableSlice = createSlice({
  name: "crud-table",
  initialState: {
    rows: magic_table_data,
  },
  reducers: {
    addRows: {
      reducer: (state, action) => {
        state.rows.push(action.payload);
        state.rows = state.rows.sort((a, b) => +a.priority - +b.priority);
        localStorage.setItem("magic-table-data", JSON.stringify(state.rows));
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
      localStorage.setItem("magic-table-data", JSON.stringify(state.rows));
    },
    editRows: (state, action) => {
      const { id, priority, name } = action.payload;
      const currentTodo = state.rows.find((item) => item.id === id);
      if (currentTodo) {
        currentTodo.priority = priority;
        currentTodo.name = name;
      }
      state.rows = state.rows.sort((a, b) => +a.priority - +b.priority);
      localStorage.setItem("magic-table-data", JSON.stringify(state.rows));
    },
  },
});

export default tableSlice.reducer;
export const { addRows, deleteRows, editRows } = tableSlice.actions;
