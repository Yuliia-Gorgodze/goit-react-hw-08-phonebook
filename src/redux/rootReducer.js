import { combineReducers } from 'redux';

import filter from './filter/filterReducer';
import contactReducer from './contacts/contactsReducer';
export default combineReducers({
  contactReducer,
  filter,
});
