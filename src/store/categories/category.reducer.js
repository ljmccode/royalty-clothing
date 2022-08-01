import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesMap: {},
  },
  reducers: {
    setCategoriesMap: (state, action) => {
      state.categoriesMap = action.payload;
    },
  },
});

export const { setCategoriesMap } = categorySlice.actions;
export default categorySlice.reducer;
