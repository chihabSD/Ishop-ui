import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useMatch,
  UNSAFE_LocationContext,
} from "react-router-dom";

import "./Styles/globalStyle.css";
import { Provider } from "react-redux";
import "../src/fontAwesome";
import HomeUI from "./pages/Home";
import NotFoundUI from "./pages/NotFound";
import { SettingsLayout, NotFoundLayout, MainLayout } from "./layouts";
import AccountSettingsUI from "./pages/AccountSettings";
import store from "./redux/store";
import { PrivateRoutes, PublicRoutes } from "./routes";
const App = () => {
  return (
    <Provider store={store}>
       
       {/* <Route element={<PrivateRoutes />}>

       </Route> */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeUI />} />
        </Route>

        {/* Settings */}
        <Route path="/account/settings" element={<MainLayout />}>
          <Route index element={<AccountSettingsUI />} />
        </Route>

        {/* IF NOT FOUND  */}
        <Route exact path="*" element={<NotFoundLayout />}>
          <Route index element={<NotFoundUI />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
