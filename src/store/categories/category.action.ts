import { Category } from './category.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { AxiosError } from 'axios';

interface CategoryError {
  errorMessage: string;
}

export const fetchCategories = createAsyncThunk<
  Category[],
  void,
  {
    rejectValue: CategoryError;
  }
>('categories/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    return categoriesArray;
  } catch (err: any) {
    let error: AxiosError<CategoryError> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
