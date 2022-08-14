import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentPage: "/",
  currentMenu: 0,
};
export const pageReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCurrentMenu: (state, action) => {
      state.currentMenu = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { setCurrentPage, setCurrentMenu } = pageReducer.actions;
export default pageReducer.reducer;
