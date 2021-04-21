
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null,  };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});


const isLogin = createReducer(false, {
  [authActions.registerSuccess]: (_, __) => true,
  [authActions.loginSuccess]: (_, __) => true,
  [authActions.getCurrentUserSuccess]: (_,__) => true,
  [authActions.logoutSuccess]: (_,__) => false,
  [authActions.registerError]: (_,__) =>false,
  [authActions.loginError]: (_,__) =>false,
  [authActions.getCurrentUserError]: (_,__) => false

})


export default combineReducers({
  user,
  token,
  isLogin
});