import { createReducer } from '@reduxjs/toolkit';

import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
  signUpFailed,
} from './user.action';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInSuccess, (state, { payload }) => {
      state.currentUser = payload;
    })
    .addCase(signInFailed, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(signOutSuccess, (state) => {
      state.currentUser = null;
    })
    .addCase(signOutFailed, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(signUpFailed, (state, { payload }) => {
      state.error = payload;
    });
});

export default userReducer;
