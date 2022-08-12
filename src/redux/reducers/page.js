import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentPage: "/",
};
export const pageReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { setCurrentPage } = pageReducer.actions;
export default pageReducer.reducer;
