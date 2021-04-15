import reducer from './rootReducer';
import { logger } from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
    },
  }),
  logger,
];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);
export default store;
