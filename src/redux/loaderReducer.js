import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth/auth-actions';
import {deleteContactRequest, deleteContactSuccess, updateContactSuccess,getContactsRequest, getContactsSuccess, addContactRequest} from './contacts/contacts-actions'

const loading = createReducer(false, {
    [authActions.registerSuccess]: () => false,
    [authActions.registerRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutRequest]: () => true,
    [authActions.loginSuccess]: () => false,
    [authActions.loginRequest]: () => true,
    [authActions.getCurrentUserSuccess]: () => false,
    [authActions.getCurrentUserRequest]: () => true,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [updateContactSuccess]: () => false,
    [getContactsRequest]: () => true,
    [getContactsSuccess]: () => false,
    [addContactRequest]: () => true,
    [updateContactSuccess]: () => false,
  });
  export default loading