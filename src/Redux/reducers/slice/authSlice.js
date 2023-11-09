// slices/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.resetPasswordSuccess = action.payload;
    },
    authError: (state, action) => {
      state.error = action.payload;
    },
  },

});

export const { loginSuccess, logoutSuccess,resetPasswordSuccess, authError } = authSlice.actions;
export default authSlice.reducer;
