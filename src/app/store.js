import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../reducers/session";

const rootReducer = combineReducers({
  session: sessionReducer,
  //add more
});

export const store = configureStore({
  reducer: rootReducer,
});
