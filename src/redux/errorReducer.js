import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth/auth-actions';
const setError = (_, { payload }) => payload;
const error = createReducer('', {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
  });

  export default error