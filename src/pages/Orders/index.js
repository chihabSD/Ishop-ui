import React from "react";
import SettingsContentsUI from "../../components/SettingsContents";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import { SettingsUIContainer } from "./Style";

const OrdersUI = () => {
  return (
    <SettingsUIContainer>
    <SettingsLayoutContainer>
      <SideBarUI />
      <SettingsContentsUI>
      Oders
      </SettingsContentsUI>
    </SettingsLayoutContainer>
  </SettingsUIContainer>
  );
};

export default OrdersUI;
