import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlice';
import { contactsReducer } from './ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
