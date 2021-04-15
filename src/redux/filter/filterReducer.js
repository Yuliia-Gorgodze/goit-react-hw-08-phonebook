import { createReducer } from '@reduxjs/toolkit';
import {filterAction} from './filter-actions';



const filterReducer = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
})


export default filterReducer;
