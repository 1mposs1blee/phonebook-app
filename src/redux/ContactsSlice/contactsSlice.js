import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { phoneContacts: [] },
  reducers: {
    addContact(state, action) {
      state.phoneContacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.phoneContacts = state.phoneContacts.filter(
        ({ id: contactId }) => contactId !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts.phoneContacts;
