import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  message: ' ',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      var random = Math.floor(Math.random() * (10 - 1)) + 1; 
      state.value += random;
    },
    decrement: (state) => {
      var random = Math.floor(Math.random() * (10 - 1)) + 1; 
      state.value -= random;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setStar : (state) => {
      state.message = ' *';
    }
  },
});

export const { increment, decrement, incrementByAmount, setStar } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectMessage = (state) => state.counter.message;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
