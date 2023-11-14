import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const getContacts = state => state.contacts.contacts;

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const contactReducer = sliceContacts.reducer;
export const { addContact, deleteContact } = sliceContacts.actions;
