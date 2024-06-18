import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    conacts: contactsReducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMidleware) =>
    getDefaultMidleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
