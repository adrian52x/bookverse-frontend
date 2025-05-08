import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookFilterState {
  search: string;
  genreId: number | null;
}

const initialState: BookFilterState = {
  search: "",
  genreId: null,
};

export const booksSlice = createSlice({
  name: "bookFilters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setGenreId(state, action: PayloadAction<number | null>) {
      state.genreId = action.payload;
    },
    clearFilters(state) {
      state.search = "";
      state.genreId = null;
    },
  },
});

export const { setSearch, setGenreId, clearFilters } = booksSlice.actions;
export default booksSlice.reducer;