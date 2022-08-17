import React from "react";
import { Outlet } from "react-router-dom";
import FooterUI from "../components/Footer";
import Header from "../components/Header";
import { SettingsLayoutContainer } from "../Styles/SettingsLayoutContainer";

const SettingsLayout = () => {
  return (
    <SettingsLayoutContainer>
      <Header />
      <Outlet />
      <FooterUI />
    </SettingsLayoutContainer>
  );
};

export default SettingsLayout;
