import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  authenticated: false,
};
export const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.user = action.payload;
    },
    clearUserInfo: (state, action) => {
      state.user = {};
    },
    authenticateUser: (state, action) => {
      state.authenticated = true;
    },
    unauthenticateUser: (state, action) => {
      state.authenticated = false;
    },
  },
});
export const {
  getUserInfo,
  clearUserInfo,
  authenticateUser,
  unauthenticateUser,
} = profileSlicer.actions;
export default profileSlicer.reducer;
