import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import booksReducer from './slices/booksSlice';
import genresReducer from './slices/genresSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    genres: genresReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 