import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [logger];


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production',
});
