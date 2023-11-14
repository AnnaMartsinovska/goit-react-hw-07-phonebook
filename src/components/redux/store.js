import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { sliceFilter } from './sliceFilter';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const { combineReducers, configureStore } = require(`@reduxjs/toolkit`);
const { sliceContacts } = require(`./sliceContacts`);

const rootReducer = combineReducers({
  contacts: sliceContacts.reducer,
  filter: sliceFilter.reducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistR = persistStore(store);

export default store;
