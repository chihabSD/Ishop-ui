import { useDispatch, useSelector } from "react-redux";
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    profileReducer: { user, authenticated },
    loadingReducer: { loading },
    modalReducer: { categoriesModal},
    pageReducer: {
      currentPage,
      currentSettingMenu,
      settingsMenus,
      currentSideBarMenu,
      sideBarMenu 
    },
  } = state;
  return {
    dispatch,

    user,
    loading,
    authenticated,

    // PAGES
    currentPage,
    currentSettingMenu,
    currentSideBarMenu,
    settingsMenus,
    sideBarMenu , categoriesModal

  };
};

export { useRedux };
