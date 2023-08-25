import { createSlice } from "@reduxjs/toolkit";
//SLices are always in js not in jsx
const counterSlice = createSlice({
  name: "counter",
  // The initial state is the state in this case
  initialState: {
    value: 0,
    isLoading: false,
    error: false,
    success: false,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
