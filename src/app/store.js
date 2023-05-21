import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../reducers/session";
import apiReducer from "../reducers/crypto";

const rootReducer = combineReducers({
  session: sessionReducer,
  api: apiReducer.reducer,
  //add more
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiReducer.middleware),
});
