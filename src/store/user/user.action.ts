import { createAction } from '@reduxjs/toolkit';
import {
  UserData,
  AdditionalInformation,
} from '../../utils/firebase/firebase.utils';

export const checkUserSession = createAction('CHECK_USER_SESSION');

export const googleSignInStart = createAction('GOOGLE_SIGN_IN_START');

export const emailSignInStart = createAction(
  'EMAIL_SIGN_IN_START',
  function prepare(email: string, password: string) {
    return {
      payload: {
        email,
        password,
      },
    };
  }
);

export const signInSuccess = createAction<UserData>('SIGN_IN_SUCCESS');

export const signInFailed = createAction<Error>('SIGN_IN_FAILED');

export const signUpStart = createAction(
  'SIGN_UP_START',
  function prepare(email: string, password: string, displayName: string) {
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
  function prepare(user: UserData, additionalDetails: AdditionalInformation) {
    return {
      payload: {
        user,
        additionalDetails,
      },
    };
  }
);

export const signUpFailed = createAction<Error>('SIGN_UP_FAILED');

export const signOutStart = createAction('SIGN_OUT_START');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');

export const signOutFailed = createAction<Error>('SIGN_OUT_FAILED');
