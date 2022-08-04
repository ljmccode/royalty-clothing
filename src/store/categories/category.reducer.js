import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './category.action';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // setCategories: (state, action) => {
    //   state.categories = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, { payload, error }) => {
      state.isLoading = false;
      state.categories = payload;
      state.error = error;
    });
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
