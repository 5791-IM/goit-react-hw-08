import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filtersReduser from "./filtersSlice";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import { persistReducer, persistStore } from "redux-persist";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, contactsReducer),
//   filters: filtersReduser,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const pesistor = persistStore(store);
