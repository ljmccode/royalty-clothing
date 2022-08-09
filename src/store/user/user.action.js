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

export const signUpStart = createAction(
  'SIGN_UP_START',
  function prepare(email, password, displayName) {
    return {
      payload: {
        email,
        password,
        displayName,
      },
    };
  }
);

export const signUpSuccess = createAction(
  'SIGN_UP_SUCCESS',
  function prepare(user, additionalDetails) {
    return {
      payload: {
        user,
        additionalDetails,
      },
    };
  }
);

export const signUpFailed = createAction('SIGN_UP_FAILED');

export const signOutStart = createAction('SIGN_OUT_START');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');

export const signOutFailed = createAction('SIGN_OUT_FAILED');
