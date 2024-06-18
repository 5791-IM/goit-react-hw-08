import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.is
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "../auth/contactsOps";
// import { selectStatusFilter } from "../filters/slice";
// import { selectContacts } from "./selectors";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteContact.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectStatusFilter],
//   (contacts, filter) =>
//     contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
// );

// export const contactsReducer = contactsSlice.reducer;
