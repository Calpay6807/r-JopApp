// jopSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jops: [],
  filterform: [],
  approved: [],
  initialized: false,
};

export const jops = createSlice({
  name: "jopSlice",
  initialState,
  reducers: {
    setJops: (state, action) => {
      state.jops = action.payload;
      state.filterform = action.payload;
      state.initialized = true;
    },
    addJop: (state, action) => {
      state.jops.push(action.payload);
    },
    filterSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const filtered = state.jops.filter((jop) =>
        jop.soyad.toLowerCase().includes(query)
      );
      state.filterform = filtered;
    },
    removeItem: (state, action) => {
      state.jops = state.jops.filter((item) => item.id !== action.payload);
      state.filterform = state.filterform.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setJops, addJop, filterSearch, removeItem } = jops.actions;
export default jops.reducer;
