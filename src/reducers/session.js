import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage, getDefaultLanguage } from "../translations/i18n";

const initialState = {
  Logged_status: false,
  Language: getDefaultLanguage(),
};

const sessionReducer = createSlice({
  name: "session",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.User = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.User = null;
    },
    changeLng: (state, action) => {
      state.Language = action.payload;
      changeLanguage(action.payload);
    },
  },
});
export const { loginSuccess, logoutSuccess, changeLng } =
  sessionReducer.actions;

export default sessionReducer.reducer;
