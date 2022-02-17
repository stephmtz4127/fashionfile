import { configureStore } from "@reduxjs/toolkit";
import { SearchReducer } from "../reducer/searchSlice";
import { UserReducer } from "../reducer/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  searchTerms: SearchReducer,
  users: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

// if adding new data to "initial state" you must restart(delete) local storge on the browser
