
import { createAction } from '@reduxjs/toolkit'

export const getContactsRequest = createAction('GET_CONTACTS_REQUEST')
export const getContactsSuccess = createAction('GET_CONTACTS_SUCCESS')
export const getContactsError = createAction('GET_CONTACTS_ERROR')

export const addContactRequest = createAction('ADD_CONTACT_REQUEST')
export const addContactSuccess = createAction('ADD_CONTACT_SUCCESS')
export const addContactError = createAction('ADD_CONTACT_ERROR')

export const updateContactError = createAction('UPDATE_CONTACT_ERROR')
export const updateContactRequest = createAction('UPDATE_CONTACT_REQUEST')
export const updateContactSuccess = createAction('UPDATE_CONTACT_SUCCESS')

export const deleteContactRequest = createAction('DELETE_CONTACT_REQUEST')
export const deleteContactSuccess = createAction('DELETE_CONTACT_SUCCESS')
export const deleteContactError = createAction('DELETE_CONTACT_ERROR')

