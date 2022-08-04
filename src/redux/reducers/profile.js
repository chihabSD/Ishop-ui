import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: {},
};
export const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.users = action.payload;
    },
    clearUserInfo: (state, action) => {
      console.log("clear user Info and rest");
      state.users = {} 
    },
  },
});
export const { getUserInfo, clearUserInfo } = profileSlicer.actions;
export default profileSlicer.reducer;
