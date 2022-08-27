import React from "react";
import SettingsContentsUI from "../../components/SettingsContents";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import { SettingsUIContainer } from "./Style";

const ReturnsUI = () => {
  return (
    <SettingsUIContainer>
    <SettingsLayoutContainer>
      <SideBarUI />
      <SettingsContentsUI>
      Return
      </SettingsContentsUI>
    </SettingsLayoutContainer>
  </SettingsUIContainer>
  );
};

export default ReturnsUI;
