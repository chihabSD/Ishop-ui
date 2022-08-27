import React from "react";
import SettingsContentsUI from "../../components/SettingsContents";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import { SettingsUIContainer } from "./Style";

const SettingsMenuUI = () => {
  return (
    <SettingsUIContainer>
    <SettingsLayoutContainer>
      <SideBarUI />
      <SettingsContentsUI>
      Settings menu
      </SettingsContentsUI>
    </SettingsLayoutContainer>
  </SettingsUIContainer>
  );
};

export default SettingsMenuUI;
