// contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [] },
  reducers: {
    addContact: (state, action) => {
      state.data.push(action.payload);
    },
    removeContact: (state, action) => {
      state.data = state.data.filter((contact) => contact.id !== action.payload);
    },
    // Add more reducers as needed
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
