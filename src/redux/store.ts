import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: { filter },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
