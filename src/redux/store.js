import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './Contacts/contactsApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import filterSlice from './Contacts/Filter/filterSlice';
import { authReducer } from './Auth/AuthSlice/authSlice';

export const store = configureStore({
  reducer: {
    contacts: filterSlice,
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
