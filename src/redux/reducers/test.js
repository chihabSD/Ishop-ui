import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: {},
  username: 'Chihabeddine',
};
export const testSlicer = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { fetchUsers } = testSlicer.actions;
export default testSlicer.reducer;
