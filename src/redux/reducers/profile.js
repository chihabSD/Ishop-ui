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
  },
});
export const { getUserInfo } = profileSlicer.actions;
export default profileSlicer.reducer;
