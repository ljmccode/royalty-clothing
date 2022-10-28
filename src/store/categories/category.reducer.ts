import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './category.action';
import { Category } from './category.types';

export type CategoriesState = {
  categories: Category[];
  isLoading: Boolean;
  error: string | null | undefined;
};

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
