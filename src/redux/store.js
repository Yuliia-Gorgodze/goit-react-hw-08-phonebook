import reducer from './rootReducer';
import { logger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import error from './errorReducer'
import authReducer from './auth/auth-reducer'
import storage from 'redux-persist/lib/storage';
import loading from './loaderReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
    },
  }),
  logger,

];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contactReducer: reducer,
    error,
    loading
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { store, persistor };
