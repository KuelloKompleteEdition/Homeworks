import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementBy: (state, action) => state + action.payload,
    decrementBy: (state, action) => state - action.payload,
    reset: () => 0,
  },
});

export const { increment, decrement, incrementBy, decrementBy, reset } = counterSlice.actions;
export default counterSlice.reducer;
