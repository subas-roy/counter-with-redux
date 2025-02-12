import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // action 1
    increment: (state) => {
      // busyness logic
      state.count = state.count + 1;
    },
    // action 2
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
