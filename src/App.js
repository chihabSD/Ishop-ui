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
import OverLay from "./components/Modals";
import CategoriesModal from "./components/Modals/CategoriesModal";
import ProfileUI from "./pages/Profile";
import SettingsMenu from "./pages/Settings";
import SettingsMenuUI from "./pages/Settings";
import OrdersUI from "./pages/Orders";
import ReturnsUI from "./pages/Returns";
import PrivacyUI from "./pages/Privacy";
import SecurityUI from "./pages/Security";
import AddressesUI from "./pages/Addresses";
import PreferencesUI from "./pages/Preferences";
import EmailsUI from "./pages/Emails";
import CardsUI from "./pages/Cards";
const App = () => {
  return (
    <Provider store={store}>
      {/* <Route element={<PrivateRoutes />}>

       </Route> */}
      {/* <OverLay>

       </OverLay> */}
      {/* {store.getState().modalReducer.categoriesModal?
       
       <CategoriesModal /> : null
      } */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeUI />} />
        </Route>

        {/* Settings */}
        <Route path="/account/" element={<MainLayout />}>
          <Route path="settings" element={<AccountSettingsUI />} />
          <Route path="profile" element={<ProfileUI />} />
          <Route path="orders" element={<OrdersUI />} />
          <Route path="returns" element={<ReturnsUI />} />
          <Route exact path="privacy" element={<PrivacyUI />} />
          <Route exact path="security" element={<SecurityUI />} />
          <Route exact path="address" element={<AddressesUI />} />
          <Route exact path="preferences" element={<PreferencesUI />} />
          <Route exact path="cards" element={<CardsUI />} />
          <Route exact path="emails" element={<EmailsUI />} />
          {/* <Route  path="/menu" element={<SettingsMenu />} /> */}
        </Route>

        {/* <Route exact path="/account/preferences" element={<Preferences />} />
            <Route exact path="/account/settings/menu" element={<AccountSettings />} />
            <Route exact path="/account/emails" element={<Emails />} />
            <Route exact path="/account/address" element={<Address />} />
            <Route exact path="/account/cards" element={<Cards />} />
            <Route exact path="/account/security" element={<Security />} />
            <Route exact path="/account/privacy" element={<Privacy />} />
            <Route exact path="/account/orders" element={<Orders />} />
            <Route exact path="/account/profile" element={<Profile />} /> */}

        {/* IF NOT FOUND  */}
        <Route exact path="*" element={<NotFoundLayout />}>
          <Route index element={<NotFoundUI />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
