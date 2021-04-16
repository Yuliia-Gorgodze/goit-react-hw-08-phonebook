import { createSelector } from '@reduxjs/toolkit'
 const getContact = (state) => state.contactReducer.contactReducer
 const filterContact = (state) => state.contactReducer.filter

 const filteredContacts = createSelector(
  [getContact, filterContact],
  (allContacts, filter) => {
    filter = filter.toLowerCase()
    return allContacts.filter(({ name }) => name.toLowerCase().includes(filter))
  },
)

export default {
  getContact,
  filterContact,
  filteredContacts
}