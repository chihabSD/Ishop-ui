import { createSlice } from "@reduxjs/toolkit";
import { settingsMenus } from "../../constants/settingsMenu";
import { menusTabs } from "../../constants/sideMenuTabs";
const initialState = {
  currentPage: "/",
  currentSettingMenu: 0,
  currentSideBarMenu: 33,
  settingsMenus:settingsMenus, 
  sideBarMenu : menusTabs
};
export const pageReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCurrentSideMenu: (state, action) => {
      state.currentSideBarMenu = action.payload;
    },
    setCurrentSettingMenu: (state, action) => {
      state.currentSettingMenu = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { setCurrentPage, setCurrentSideMenu, setCurrentSettingMenu } = pageReducer.actions;
export default pageReducer.reducer;
