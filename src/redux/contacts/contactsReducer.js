
import { createReducer } from '@reduxjs/toolkit'
import {
  getContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,

} from './contacts-actions'

const contactReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((order) => order.id !== payload),
})



export default  contactReducer