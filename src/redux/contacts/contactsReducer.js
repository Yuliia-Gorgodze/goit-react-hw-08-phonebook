// import { createReducer } from '@reduxjs/toolkit';
// import actions from './contacts-actions';
// const contacts = createReducer([], {
//   [actions.fetchContactsSuccess]: (_, { payload }) => [...payload],
//   [actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
//   [actions.deleteContactSuccess]: (state, { payload }) => {
//     console.log('state: ', state);
//     console.log('pay: ', payload);
//     state.filter(({ id }) => id !== payload);
//   },
// });
// export default contacts;
import { createReducer } from '@reduxjs/toolkit'
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactErrors,
  filterAction,
} from './contacts-actions'

const contactReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((order) => order.id !== payload),
})



export default  contactReducer