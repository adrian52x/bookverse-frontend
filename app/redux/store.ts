import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import booksReducer from './slices/booksSlice';
import authReducer from './slices/authSlice';
//import genresReducer from './slices/genresSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 