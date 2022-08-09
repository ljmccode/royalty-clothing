import { createReducer } from '@reduxjs/toolkit';

import { signInSuccess, signInFailed } from './user.action';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(signInFailed, (state, action) => {
      state.error = action.payload;
    });
});

export default userReducer;
