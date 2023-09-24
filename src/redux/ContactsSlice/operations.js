import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(
        'Failed to fetch the contacts. Please try again.'
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (info, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', info);

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(
        'Failed to add the contact. Please try again.'
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(
        'Failed to delete the contact. Please try again.'
      );
    }
  }
);
