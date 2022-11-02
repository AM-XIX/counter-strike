import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logMiddleware from './middleware/log';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [logMiddleware],
});
