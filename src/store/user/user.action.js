import { createAction } from '@reduxjs/toolkit';

export const checkUserSession = createAction('CHECK_USER_SESSION');

export const googleSignInStart = createAction('GOOGLE_SIGN_IN_START');

export const emailSignInStart = createAction(
  'EMAIL_SIGN_IN_START',
  function prepare(email, password) {
    return {
      payload: {
        email,
        password,
      },
    };
  }
);

export const signInSuccess = createAction('SIGN_IN_SUCCESS');

export const signInFailed = createAction('SIGN_IN_FAILED');
