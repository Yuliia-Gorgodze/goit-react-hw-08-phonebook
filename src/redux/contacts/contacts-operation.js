  import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../contacts/contacts-actions'

import axios from 'axios'
axios.defaults.baseURL = `http://goit-phonebook-api.herokuapp.com/`

const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest())
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)))
}
const addContacts = (contact) => (dispatch) => {
  dispatch(addContactRequest())
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)))
}


const deleteContacts = (id) => (dispatch) => {
  dispatch(deleteContactRequest())
  axios
    .delete(`/contacts/${id}`)
    .then(({ data }) => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)))
}

export default { getContacts, addContacts, deleteContacts }